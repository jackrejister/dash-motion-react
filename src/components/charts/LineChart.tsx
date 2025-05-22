
import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { LineChart as ReLineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { useTheme } from '@/context/ThemeContext';
import { motion } from 'framer-motion';

interface DataPoint {
  name: string;
  value: number;
}

interface MultiLineChartProps {
  title: string;
  description?: string;
  data: any[];
  lines: { key: string; color: string; }[];
}

export function LineChart({ title, description, data, lines }: MultiLineChartProps) {
  const { theme } = useTheme();
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      whileHover={{ 
        scale: 1.01,
        transition: { duration: 0.2 }
      }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      <Card>
        <CardHeader>
          <CardTitle>{title}</CardTitle>
          {description && <CardDescription>{description}</CardDescription>}
        </CardHeader>
        <CardContent>
          <div className="h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <ReLineChart
                data={data}
                margin={{
                  top: 10,
                  right: 30,
                  left: 0,
                  bottom: 0,
                }}
              >
                <CartesianGrid strokeDasharray="3 3" stroke={theme === 'dark' ? '#333' : '#eee'} />
                <XAxis 
                  dataKey="name" 
                  stroke={theme === 'dark' ? '#888' : '#666'}
                />
                <YAxis stroke={theme === 'dark' ? '#888' : '#666'} />
                <Tooltip 
                  contentStyle={{ 
                    backgroundColor: theme === 'dark' ? '#333' : '#fff',
                    borderColor: theme === 'dark' ? '#444' : '#ddd',
                    color: theme === 'dark' ? '#fff' : '#333'
                  }} 
                />
                {lines.map((line, index) => (
                  <Line
                    key={line.key}
                    type="monotone"
                    dataKey={line.key}
                    stroke={line.color}
                    strokeWidth={isHovered ? 2.5 : 2}
                    dot={{ r: 4 }}
                    activeDot={{ r: 6 }}
                    animationDuration={1000}
                    animationEasing="ease-in-out"
                  />
                ))}
              </ReLineChart>
            </ResponsiveContainer>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}

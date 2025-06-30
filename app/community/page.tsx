"use client";
import * as React from "react";
import { Area, AreaChart, CartesianGrid, XAxis } from "recharts";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";


const chartData = [
  { date: "2024-06-01", shNews: 45, shCommunity: 78, shCryptoLesson: 32 },
  { date: "2024-06-02", shNews: 52, shCommunity: 85, shCryptoLesson: 41 },
  { date: "2024-06-03", shNews: 38, shCommunity: 67, shCryptoLesson: 28 },
  { date: "2024-06-04", shNews: 67, shCommunity: 94, shCryptoLesson: 55 },
  { date: "2024-06-05", shNews: 43, shCommunity: 71, shCryptoLesson: 35 },
  { date: "2024-06-06", shNews: 59, shCommunity: 88, shCryptoLesson: 47 },
  { date: "2024-06-07", shNews: 71, shCommunity: 102, shCryptoLesson: 63 },
  { date: "2024-06-08", shNews: 48, shCommunity: 76, shCryptoLesson: 39 },
  { date: "2024-06-09", shNews: 84, shCommunity: 115, shCryptoLesson: 72 },
  { date: "2024-06-10", shNews: 37, shCommunity: 62, shCryptoLesson: 31 },
  { date: "2024-06-11", shNews: 55, shCommunity: 83, shCryptoLesson: 44 },
  { date: "2024-06-12", shNews: 92, shCommunity: 128, shCryptoLesson: 81 },
  { date: "2024-06-13", shNews: 41, shCommunity: 69, shCryptoLesson: 33 },
  { date: "2024-06-14", shNews: 76, shCommunity: 107, shCryptoLesson: 64 },
  { date: "2024-06-15", shNews: 63, shCommunity: 91, shCryptoLesson: 52 },
  { date: "2024-06-16", shNews: 58, shCommunity: 86, shCryptoLesson: 48 },
  { date: "2024-06-17", shNews: 89, shCommunity: 124, shCryptoLesson: 78 },
  { date: "2024-06-18", shNews: 34, shCommunity: 58, shCryptoLesson: 27 },
  { date: "2024-06-19", shNews: 67, shCommunity: 95, shCryptoLesson: 56 },
  { date: "2024-06-20", shNews: 81, shCommunity: 113, shCryptoLesson: 71 },
  { date: "2024-06-21", shNews: 46, shCommunity: 74, shCryptoLesson: 38 },
  { date: "2024-06-22", shNews: 62, shCommunity: 89, shCryptoLesson: 51 },
  { date: "2024-06-23", shNews: 95, shCommunity: 132, shCryptoLesson: 84 },
  { date: "2024-06-24", shNews: 39, shCommunity: 65, shCryptoLesson: 32 },
  { date: "2024-06-25", shNews: 53, shCommunity: 81, shCryptoLesson: 43 },
  { date: "2024-06-26", shNews: 78, shCommunity: 109, shCryptoLesson: 67 },
  { date: "2024-06-27", shNews: 87, shCommunity: 121, shCryptoLesson: 76 },
  { date: "2024-06-28", shNews: 44, shCommunity: 72, shCryptoLesson: 36 },
  { date: "2024-06-29", shNews: 51, shCommunity: 79, shCryptoLesson: 42 },
  { date: "2024-06-30", shNews: 93, shCommunity: 129, shCryptoLesson: 82 },
];

const chartConfig = {
  members: {
    label: "Members",
  },
  shNews: {
    label: "SH News",
    color: "#3b82f6", // Blue
  },
  shCommunity: {
    label: "SH Community Chat",
    color: "#10b981", // Green
  },
  shCryptoLesson: {
    label: "SH Crypto Lesson",
    color: "#f59e0b", // Amber/Orange
  },
} satisfies ChartConfig;

const activeMembersData = [
  { id: 1, name: "Sokha Chan", messages: 2847 },
  { id: 2, name: "Veasna Pich", messages: 2563 },
  { id: 3, name: "Ratha Keo", messages: 2298 },
  { id: 4, name: "Dara Lim", messages: 2156 },
  { id: 5, name: "Bopha Seng", messages: 2089 },
  { id: 6, name: "Makara Chea", messages: 1943 },
  { id: 7, name: "Sophea Ros", messages: 1867 },
  { id: 8, name: "Pisach Tan", messages: 1798 },
  { id: 9, name: "Rithy Meas", messages: 1745 },
  { id: 10, name: "Sreypov Ung", messages: 1692 },
  { id: 11, name: "Thida Neang", messages: 1634 },
  { id: 12, name: "Panha Ly", messages: 1587 },
  { id: 13, name: "Chenda Ouk", messages: 1523 },
  { id: 14, name: "Mony Prom", messages: 1465 },
  { id: 15, name: "Visal Khiev", messages: 1412 },
  { id: 16, name: "Nary Yim", messages: 1358 },
  { id: 17, name: "Chandy Nhem", messages: 1304 },
  { id: 18, name: "Sambath Ek", messages: 1251 },
  { id: 19, name: "Pichenda Var", messages: 1198 },
  { id: 20, name: "Kimheang Koy", messages: 1145 },
];

const Community = () => {
  const filteredData = chartData.filter((item) => {
    const date = new Date(item.date);
    const referenceDate = new Date("2024-06-30");
    const startDate = new Date(referenceDate);
    startDate.setDate(startDate.getDate() - 30);
    return date >= startDate;
  });

  return (
    <div className="min-h-screen bg-black">
      <div className="text-center max-w-4xl mx-auto py-8">
        <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-primary-light)] text-transparent bg-clip-text">
          Community Analytics
        </h2>
      </div>

      <section className="relative overflow-hidden">
        <div className="container mx-auto px-6 lg:px-8">
          <Card className="pt-0 glass-card">
            <CardHeader className="flex items-center gap-2 space-y-0 border-b py-7 sm:flex-row">
              <div className="grid flex-1 gap-2">
                <CardTitle>Telegram Channel Growth</CardTitle>
                <CardDescription>
                  Member joins across SH Telegram channels for the last 30 days
                </CardDescription>
              </div>
            </CardHeader>
            <CardContent className="px-2 pt-4 sm:px-6 sm:pt-6">
              <ChartContainer
                config={chartConfig}
                className="aspect-auto h-[250px] w-full"
              >
                <AreaChart data={filteredData}>
                  <defs>
                    <linearGradient id="fillShNews" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.8} />
                      <stop
                        offset="95%"
                        stopColor="#3b82f6"
                        stopOpacity={0.1}
                      />
                    </linearGradient>
                    <linearGradient
                      id="fillShCommunity"
                      x1="0"
                      y1="0"
                      x2="0"
                      y2="1"
                    >
                      <stop offset="5%" stopColor="#10b981" stopOpacity={0.8} />
                      <stop
                        offset="95%"
                        stopColor="#10b981"
                        stopOpacity={0.1}
                      />
                    </linearGradient>
                    <linearGradient
                      id="fillShCryptoLesson"
                      x1="0"
                      y1="0"
                      x2="0"
                      y2="1"
                    >
                      <stop offset="5%" stopColor="#f59e0b" stopOpacity={0.8} />
                      <stop
                        offset="95%"
                        stopColor="#f59e0b"
                        stopOpacity={0.1}
                      />
                    </linearGradient>
                  </defs>
                  <CartesianGrid vertical={false} />
                  <XAxis
                    dataKey="date"
                    tickLine={false}
                    axisLine={false}
                    tickMargin={8}
                    minTickGap={32}
                    tickFormatter={(value) => {
                      const date = new Date(value);
                      return date.toLocaleDateString("en-US", {
                        month: "short",
                        day: "numeric",
                      });
                    }}
                  />
                  <ChartTooltip
                    cursor={false}
                    content={
                      <ChartTooltipContent
                        labelFormatter={(value) => {
                          return new Date(value).toLocaleDateString("en-US", {
                            month: "short",
                            day: "numeric",
                          });
                        }}
                        indicator="dot"
                        className="min-w-[200px]"
                      />
                    }
                  />
                  <Area
                    dataKey="shCryptoLesson"
                    type="natural"
                    fill="url(#fillShCryptoLesson)"
                    stroke="#f59e0b"
                    strokeWidth={2}
                    stackId="a"
                  />
                  <Area
                    dataKey="shNews"
                    type="natural"
                    fill="url(#fillShNews)"
                    stroke="#3b82f6"
                    strokeWidth={2}
                    stackId="a"
                  />
                  <Area
                    dataKey="shCommunity"
                    type="natural"
                    fill="url(#fillShCommunity)"
                    stroke="#10b981"
                    strokeWidth={2}
                    stackId="a"
                  />
                  <ChartLegend content={<ChartLegendContent payload={[]} />} />
                </AreaChart>
              </ChartContainer>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="relative overflow-hidden mt-8 pb-20">
        <div className="container mx-auto px-6 lg:px-8">
          <Card className="pt-0 glass-card">
            <CardHeader className="flex items-center gap-2 space-y-0 border-b py-7 sm:flex-row">
              <div className="grid flex-1 gap-2">
                <CardTitle>Most Active Community Members</CardTitle>
                <CardDescription>
                  Top 20 most active members by message count in Telegram groups
                </CardDescription>
              </div>
            </CardHeader>
            <CardContent className="px-2 pt-4 sm:px-6 sm:pt-6">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-[var(--color-primary)]/20">
                      <th className="text-left py-3 px-4 font-semibold text-[var(--color-primary)] text-sm">
                        Rank
                      </th>
                      <th className="text-left py-3 px-4 font-semibold text-[var(--color-primary)] text-sm">
                        Name
                      </th>
                      <th className="text-right py-3 px-4 font-semibold text-[var(--color-primary)] text-sm">
                        Messages
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {activeMembersData.map((member, index) => (
                      <tr
                        key={member.id}
                        className="border-b border-[var(--color-primary)]/10 hover:bg-[var(--color-primary)]/5 transition-colors duration-200"
                      >
                        <td className="py-3 px-4 text-sm text-[var(--color-foreground)]">
                          <div className="flex items-center gap-2">
                            {index + 1 <= 3 && (
                              <div className="w-2 h-2 rounded-full bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-primary-light)]"></div>
                            )}
                            #{index + 1}
                          </div>
                        </td>
                        <td className="py-3 px-4 text-sm text-[var(--color-foreground)] font-medium">
                          {member.name}
                        </td>
                        <td className="py-3 px-4 text-sm text-right">
                          <span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium bg-gradient-to-r from-[var(--color-primary)]/20 to-[var(--color-primary-light)]/20 text-[var(--color-primary)] border border-[var(--color-primary)]/30">
                            {member.messages.toLocaleString()}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default Community;

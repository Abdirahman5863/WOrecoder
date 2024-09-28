"use client";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {  } from "@/components/ui/chart"; // Assume these are imported chart components
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { BarChart, LineChart ,} from "lucide-react";

const AnalyticsPage = () => {
  const [data, setData] = useState({
    sales: 0,
    customers: 0,
    orders: 0,
    growth: 0,
  });

  useEffect(() => {
    // Fetch analytics data from your API
    fetch("/api/analytics")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

  return (
    <div className="p-8 space-y-8">
      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <Card>
          <CardHeader>
            <CardTitle>Total Sales</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-3xl font-bold">${data.sales}</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Total Customers</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-3xl font-bold">{data.customers}</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Total Orders</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-3xl font-bold">{data.orders}</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Growth Rate</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-3xl font-bold">{data.growth}%</p>
          </CardContent>
        </Card>
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Sales Over Time Line Chart */}
        <Card>
          <CardHeader>
            <CardTitle>Sales Over Time</CardTitle>
          </CardHeader>
          <CardContent>
            <LineChart   />
          </CardContent>
        </Card>

        {/* Orders Distribution Bar Chart */}
        <Card>
          <CardHeader>
            <CardTitle>Orders Distribution</CardTitle>
          </CardHeader>
          <CardContent>
            <BarChart />
          </CardContent>
        </Card>
      </div>

      {/* Customer Demographics Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Customer Growth Line Chart */}
        <Card>
          <CardHeader>
            <CardTitle>Customer Growth</CardTitle>
          </CardHeader>
          <CardContent>
            <LineChart/>
          </CardContent>
        </Card>

        {/* Customer Demographics Doughnut Chart */}
        <Card>
          <CardHeader>
            <CardTitle>Customer Demographics</CardTitle>
          </CardHeader>
          <CardContent>
            <BarChart />
          </CardContent>
        </Card>
      </div>

      {/* CTA Button */}
      <div className="flex justify-center mt-6">
        <Button className="bg-blue-500 text-white">View Detailed Report</Button>
      </div>
    </div>
  );
};

export default AnalyticsPage;

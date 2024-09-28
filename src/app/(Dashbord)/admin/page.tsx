 "use client";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

const AdminPage = () => {
  const [adminData, setAdminData] = useState({
    totalUsers: 0,
    pendingOrders: 0,
    totalRevenue: 0,
    issuesReported: 0,
  });

  const router = useRouter();

  useEffect(() => {
    // Fetch admin data from your API
    fetch("/api/admin/stats")
      .then((res) => res.json())
      .then((data) => setAdminData(data));
  }, []);

  return (
    <div className="p-8 space-y-8">
      {/* Admin Overview Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <Card>
          <CardHeader>
            <CardTitle>Total Customer</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-3xl font-bold">{adminData.totalUsers}</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Pending Orders</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-3xl font-bold">{adminData.pendingOrders}</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Total Revenue</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-3xl font-bold">${adminData.totalRevenue}</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Issues Reported</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-3xl font-bold">{adminData.issuesReported}</p>
          </CardContent>
        </Card>
      </div>

      {/* Management Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* User Management */}
        <Card>
          <CardHeader>
            <CardTitle>Customer Management</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-500">Manage and view Customers</p>
            <Button onClick={() => router.push("/customer")}>
              Go to Customers
            </Button>
          </CardContent>
        </Card>

        {/* Order Management */}
        <Card>
          <CardHeader>
            <CardTitle>Order Management</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-500">Manage customer orders</p>
            <Button onClick={() => router.push("/order")}>
              Go to Orders
            </Button>
          </CardContent>
        </Card>
      </div>

      {/* Settings Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Application Settings */}
        <Card>
          <CardHeader>
            <CardTitle>Settings</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-500">Connect your WhatsApp account</p>
            <Button onClick={() => router.push("/setting")}>
              Go to Settings
            </Button>
          </CardContent>
        </Card>

        {/* Issue Reporting */}
        <Card>
          <CardHeader>
            <CardTitle>Reported Issues</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-500">View reported issues by users</p>
            <Button onClick={() => router.push("/analytics")}>
              View Issues
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default AdminPage;

"use client";
import React from "react"; 
import { Button, Card, CardContent, Stack, Typography } from "@mui/material";
import CartItem from "./cartitem";
export default function Home() {
  const [count, setCount] = React.useState(0);
   return (
    <>
    <Typography variant="h2" component="h1" gutterBottom>
      Total Cart Items: {count}
    </Typography>
    <Button 
      variant="contained" 
      color="primary">
      Reset Cart
    </Button>
    <CartItem 
      title="iPhone" 
      updateCount={() => setCount(count + 1)} />
    <CartItem 
      title="iPad" 
      updateCount={() => setCount(count + 1)} />
    </>
  );
}

import React from "react";
import { Button, Card, CardContent, Stack, Typography } from "@mui/material";
export default function CartItem({  
    title,
    updateCount,
}:{
    title: string;
    updateCount: () => void;
}) {
    const [count, setCount] = React.useState(0);
    return (
     <Card>
      <CardContent>
      <Stack direction="row" spacing={2}>
        <Typography
          variant="h4"
          component="h2"
          sx={{ flexGrow: 1 }}>
          {title || "Cart Item"}
        </Typography>        
        <Typography variant="h4" component="h2" >
          {count}
        </Typography>
        <Button 
          variant="contained" 
          color="primary" 
          onClick={() => {
            setCount(count + 1);
            updateCount();
            console.log(count);
          }}>
          +
        </Button>
      </Stack>
      </CardContent> 
    </Card>
  );
}
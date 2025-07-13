
import React, { useState, useEffect } from 'react';
import { ArrowLeft, CreditCard, Wallet, MapPin, Clock, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';

const CheckoutPage = () => {
  const [orderData, setOrderData] = useState<any>(null);
  const [paymentMethod, setPaymentMethod] = useState('card');
  const [usePoints, setUsePoints] = useState(false);
  const [userPoints] = useState(1250);

  useEffect(() => {
    const data = localStorage.getItem('orderData');
    if (data) {
      setOrderData(JSON.parse(data));
    }
  }, []);

  if (!orderData) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-xl font-semibold mb-2">No order found</h2>
          <Button onClick={() => window.location.href = '/search'}>
            Browse Restaurants
          </Button>
        </div>
      </div>
    );
  }

  const preBookingFee = orderData.restaurant.hasTableReservation ? orderData.seats * 20 : 0;
  const pointsDiscount = usePoints ? Math.min(userPoints, orderData.totalAmount * 0.1) : 0;
  const finalAmount = orderData.totalAmount + preBookingFee - pointsDiscount;

  const handlePayment = () => {
    // Simulate payment processing
    const loyaltyData = JSON.parse(localStorage.getItem('loyaltyData') || '{}');
    const restaurantId = orderData.restaurant.id;
    
    if (!loyaltyData[restaurantId]) {
      loyaltyData[restaurantId] = { visits: 0, totalSpent: 0 };
    }
    
    loyaltyData[restaurantId].visits += 1;
    loyaltyData[restaurantId].totalSpent += finalAmount;
    
    localStorage.setItem('loyaltyData', JSON.stringify(loyaltyData));
    localStorage.removeItem('orderData');
    
    // Update user points
    const newPoints = userPoints + orderData.totalPoints - (usePoints ? pointsDiscount : 0);
    localStorage.setItem('userPoints', newPoints.toString());
    
    window.location.href = '/order-success';
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-4xl mx-auto px-4 py-6">
        {/* Header */}
        <div className="flex items-center gap-4 mb-6">
          <Button 
            variant="ghost" 
            size="sm"
            onClick={() => window.history.back()}
          >
            <ArrowLeft size={20} />
          </Button>
          <h1 className="text-2xl font-bold">Checkout</h1>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Order Details */}
          <div className="space-y-6">
            {/* Restaurant Info */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <MapPin size={20} />
                  {orderData.restaurant.name}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{orderData.restaurant.address}</p>
                <div className="flex items-center gap-4 mt-2">
                  <Badge className="flex items-center gap-1">
                    <Clock size={14} />
                    Walk-in: {orderData.walkInTime}
                  </Badge>
                  {orderData.seats > 1 && (
                    <Badge variant="outline" className="flex items-center gap-1">
                      <Users size={14} />
                      {orderData.seats} seats reserved
                    </Badge>
                  )}
                </div>
              </CardContent>
            </Card>

            {/* Order Items */}
            <Card>
              <CardHeader>
                <CardTitle>Order Summary</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {orderData.items.map((item: any) => (
                    <div key={item.id} className="flex justify-between items-center">
                      <div>
                        <p className="font-medium">{item.name}</p>
                        <p className="text-sm text-muted-foreground">Qty: {item.quantity}</p>
                      </div>
                      <span className="font-medium">₹{item.price * item.quantity}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Payment Method */}
            <Card>
              <CardHeader>
                <CardTitle>Payment Method</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <label className="flex items-center gap-3 p-3 border rounded-lg cursor-pointer">
                    <input 
                      type="radio" 
                      value="card" 
                      checked={paymentMethod === 'card'}
                      onChange={(e) => setPaymentMethod(e.target.value)}
                    />
                    <CreditCard size={20} />
                    <span>Credit/Debit Card</span>
                  </label>
                  <label className="flex items-center gap-3 p-3 border rounded-lg cursor-pointer">
                    <input 
                      type="radio" 
                      value="upi" 
                      checked={paymentMethod === 'upi'}
                      onChange={(e) => setPaymentMethod(e.target.value)}
                    />
                    <Wallet size={20} />
                    <span>UPI</span>
                  </label>
                </div>

                {paymentMethod === 'card' && (
                  <div className="mt-4 space-y-3">
                    <Input placeholder="Card Number" />
                    <div className="grid grid-cols-2 gap-3">
                      <Input placeholder="MM/YY" />
                      <Input placeholder="CVV" />
                    </div>
                    <Input placeholder="Cardholder Name" />
                  </div>
                )}

                {paymentMethod === 'upi' && (
                  <div className="mt-4">
                    <Input placeholder="UPI ID (e.g., yourname@paytm)" />
                  </div>
                )}
              </CardContent>
            </Card>
          </div>

          {/* Payment Summary */}
          <div>
            <Card className="sticky top-4">
              <CardHeader>
                <CardTitle>Payment Summary</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span>Subtotal</span>
                    <span>₹{orderData.totalAmount}</span>
                  </div>
                  {preBookingFee > 0 && (
                    <div className="flex justify-between">
                      <span>Pre-booking fee</span>
                      <span>₹{preBookingFee}</span>
                    </div>
                  )}
                  
                  {/* Use Points Option */}
                  <div className="border-t pt-2">
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input 
                        type="checkbox" 
                        checked={usePoints}
                        onChange={(e) => setUsePoints(e.target.checked)}
                      />
                      <span className="text-sm">Use Crave Points (Max 10% discount)</span>
                    </label>
                    <p className="text-xs text-muted-foreground ml-6">
                      Available: {userPoints} CP = ₹{Math.min(userPoints, orderData.totalAmount * 0.1)} off
                    </p>
                  </div>
                  
                  {usePoints && (
                    <div className="flex justify-between text-green-600">
                      <span>Points discount</span>
                      <span>-₹{pointsDiscount}</span>
                    </div>
                  )}
                </div>

                <div className="border-t pt-4">
                  <div className="flex justify-between font-bold text-lg">
                    <span>Total Amount</span>
                    <span>₹{finalAmount}</span>
                  </div>
                  <div className="flex justify-between text-green-600 font-medium">
                    <span>Points to earn</span>
                    <span>+{orderData.totalPoints} CP</span>
                  </div>
                </div>

                <Button 
                  className="w-full" 
                  size="lg"
                  onClick={handlePayment}
                >
                  Pay ₹{finalAmount}
                </Button>

                <p className="text-xs text-muted-foreground text-center">
                  By proceeding, you agree to our terms and conditions
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;

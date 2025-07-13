
import React, { useEffect, useState } from 'react';
import { CheckCircle, Gift, Home, Receipt } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const OrderSuccessPage = () => {
  const [loyaltyStatus, setLoyaltyStatus] = useState<any>(null);

  useEffect(() => {
    // Check loyalty status for free meal eligibility
    const loyaltyData = JSON.parse(localStorage.getItem('loyaltyData') || '{}');
    
    // Find any restaurant where user has 10+ visits
    for (const [restaurantId, data] of Object.entries(loyaltyData) as any) {
      if (data.visits >= 10) {
        setLoyaltyStatus({
          restaurantId,
          visits: data.visits,
          totalSpent: data.totalSpent,
          freeMealEligible: true
        });
        break;
      }
    }
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-2xl mx-auto px-4 py-12">
        <div className="text-center space-y-6">
          {/* Success Icon */}
          <div className="mx-auto w-20 h-20 bg-green-100 rounded-full flex items-center justify-center">
            <CheckCircle className="text-green-600" size={40} />
          </div>

          {/* Success Message */}
          <div>
            <h1 className="text-3xl font-bold text-foreground mb-2">Order Confirmed! 🎉</h1>
            <p className="text-muted-foreground">
              Your payment was successful. Get ready for some delicious food!
            </p>
          </div>

          {/* Order Details Card */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Receipt size={20} />
                Order Details
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex justify-between">
                <span>Order ID</span>
                <span className="font-mono">#CR{Date.now().toString().slice(-6)}</span>
              </div>
              <div className="flex justify-between">
                <span>Estimated Wait Time</span>
                <Badge>15-20 minutes</Badge>
              </div>
              <div className="flex justify-between">
                <span>Walk-in Time</span>
                <span className="font-medium">As scheduled</span>
              </div>
            </CardContent>
          </Card>

          {/* Loyalty Reward */}
          {loyaltyStatus?.freeMealEligible && (
            <Card className="bg-gradient-to-r from-yellow-50 to-orange-50 border-yellow-200">
              <CardContent className="p-6 text-center">
                <Gift className="mx-auto text-yellow-600 mb-3" size={32} />
                <h3 className="text-lg font-bold text-yellow-800 mb-2">
                  🎉 Congratulations! Free Meal Unlocked!
                </h3>
                <p className="text-yellow-700 text-sm">
                  You've completed 10 visits to this restaurant! 
                  Your next meal (up to ₹{Math.floor(loyaltyStatus.totalSpent / loyaltyStatus.visits)}) is on us!
                </p>
                <Badge className="mt-2 bg-yellow-600 text-white">
                  Loyalty Reward Activated
                </Badge>
              </CardContent>
            </Card>
          )}

          {/* Points Earned */}
          <Card className="bg-gradient-to-r from-green-50 to-blue-50 border-green-200">
            <CardContent className="p-6 text-center">
              <div className="text-3xl font-bold text-green-600 mb-2">+50 CP</div>
              <p className="text-green-700">Crave Points earned from this order!</p>
            </CardContent>
          </Card>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              variant="outline"
              onClick={() => window.location.href = '/profile'}
            >
              View Order History
            </Button>
            <Button 
              onClick={() => window.location.href = '/search'}
            >
              <Home className="mr-2" size={16} />
              Continue Exploring
            </Button>
          </div>

          {/* Instructions */}
          <Card>
            <CardContent className="p-4">
              <h4 className="font-semibold mb-2">What's Next?</h4>
              <div className="text-sm text-muted-foreground space-y-1">
                <p>• Head to the restaurant at your scheduled time</p>
                <p>• Show this confirmation to the staff</p>
                <p>• Enjoy your meal and earn points!</p>
                <p>• Don't forget to rate your experience</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default OrderSuccessPage;

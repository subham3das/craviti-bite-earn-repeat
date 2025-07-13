
import React, { useState } from 'react';
import { ArrowLeft, Gift, Crown, Star, Coffee, Pizza, Utensils } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';

const LoyaltyCardPage = () => {
  const [loyaltyCards] = useState([
    {
      id: 1,
      restaurant: "Pizza Paradise",
      icon: Pizza,
      visits: 7,
      requiredVisits: 10,
      totalSpent: 3450,
      nextReward: "Free Margherita Pizza",
      cardColor: "from-red-500 to-orange-500",
      level: "Gold"
    },
    {
      id: 2,
      restaurant: "Bean There Coffee",
      icon: Coffee,
      visits: 3,
      requiredVisits: 10,
      totalSpent: 840,
      nextReward: "Free Cappuccino",
      cardColor: "from-amber-600 to-yellow-500",
      level: "Bronze"
    },
    {
      id: 3,
      restaurant: "Burger Junction",
      icon: Utensils,
      visits: 10,
      requiredVisits: 10,
      totalSpent: 2800,
      nextReward: "Free Classic Burger - READY!",
      cardColor: "from-green-500 to-emerald-500",
      level: "Platinum",
      canClaim: true
    }
  ]);

  const getProgressPercentage = (visits: number, required: number) => {
    return Math.min((visits / required) * 100, 100);
  };

  const getLevelIcon = (level: string) => {
    switch (level) {
      case 'Platinum': return <Crown className="text-purple-400" size={16} />;
      case 'Gold': return <Star className="text-yellow-400" size={16} />;
      default: return <Gift className="text-gray-400" size={16} />;
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-4xl mx-auto px-4 py-6">
        {/* Header */}
        <div className="flex items-center gap-4 mb-6">
          <Button 
            variant="outline" 
            size="icon"
            onClick={() => window.history.back()}
          >
            <ArrowLeft size={20} />
          </Button>
          <div>
            <h1 className="text-2xl font-bold text-foreground">Loyalty Cards</h1>
            <p className="text-muted-foreground">Track your progress and claim free rewards</p>
          </div>
        </div>

        {/* Stats Overview */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          <Card>
            <CardContent className="p-4">
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">3</div>
                <div className="text-sm text-muted-foreground">Active Cards</div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4">
              <div className="text-center">
                <div className="text-2xl font-bold text-green-600">1</div>
                <div className="text-sm text-muted-foreground">Ready to Claim</div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4">
              <div className="text-center">
                <div className="text-2xl font-bold text-orange-600">₹7,090</div>
                <div className="text-sm text-muted-foreground">Total Spent</div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Loyalty Cards */}
        <div className="space-y-4">
          {loyaltyCards.map((card) => {
            const IconComponent = card.icon;
            const progressPercentage = getProgressPercentage(card.visits, card.requiredVisits);
            
            return (
              <Card key={card.id} className="overflow-hidden">
                <div className={`h-2 bg-gradient-to-r ${card.cardColor}`}></div>
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${card.cardColor} flex items-center justify-center text-white`}>
                        <IconComponent size={24} />
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground">{card.restaurant}</h3>
                        <div className="flex items-center gap-2">
                          {getLevelIcon(card.level)}
                          <Badge variant="secondary">{card.level} Member</Badge>
                        </div>
                      </div>
                    </div>
                    {card.canClaim && (
                      <Button size="sm" className="bg-green-600 hover:bg-green-700">
                        <Gift size={14} className="mr-1" />
                        Claim
                      </Button>
                    )}
                  </div>

                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-muted-foreground">Progress</span>
                      <span className="text-sm font-medium">
                        {card.visits}/{card.requiredVisits} visits
                      </span>
                    </div>
                    
                    <Progress value={progressPercentage} className="h-2" />
                    
                    <div className="flex justify-between items-center">
                      <div>
                        <p className="text-sm font-medium text-foreground">Next Reward:</p>
                        <p className="text-sm text-muted-foreground">{card.nextReward}</p>
                      </div>
                      <div className="text-right">
                        <p className="text-sm text-muted-foreground">Total Spent</p>
                        <p className="font-medium">₹{card.totalSpent.toLocaleString()}</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* How it Works */}
        <Card className="mt-6">
          <CardHeader>
            <CardTitle>How Loyalty Cards Work</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="text-center">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-2">
                  <Utensils className="text-primary" size={20} />
                </div>
                <h4 className="font-medium mb-1">Visit & Order</h4>
                <p className="text-sm text-muted-foreground">Complete your walk-in orders at participating restaurants</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-2">
                  <Star className="text-primary" size={20} />
                </div>
                <h4 className="font-medium mb-1">Collect Stamps</h4>
                <p className="text-sm text-muted-foreground">Each completed order earns you a stamp on your loyalty card</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-2">
                  <Gift className="text-primary" size={20} />
                </div>
                <h4 className="font-medium mb-1">Claim Rewards</h4>
                <p className="text-sm text-muted-foreground">Get your 11th meal free after 10 completed orders</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default LoyaltyCardPage;

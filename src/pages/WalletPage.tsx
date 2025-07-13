import React, { useState } from 'react';
import { Wallet, Plus, Gift, ArrowUpRight, ArrowDownLeft, CreditCard } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';

const WalletPage = () => {
  const [cravePoints, setCravePoints] = useState(1250);
  const [topUpAmount, setTopUpAmount] = useState('');

  const transactions = [
    {
      id: 1,
      type: 'earned',
      description: 'Order from Pizza Paradise',
      amount: 50,
      date: '2 hours ago',
      icon: '🍕'
    },
    {
      id: 2,
      type: 'redeemed',
      description: 'Free Coffee Voucher',
      amount: -100,
      date: 'Yesterday',
      icon: '☕'
    },
    {
      id: 3,
      type: 'earned',
      description: 'Daily Task Completion',
      amount: 25,
      date: 'Yesterday',
      icon: '✅'
    },
    {
      id: 4,
      type: 'earned',
      description: 'Food Reel Upload',
      amount: 75,
      date: '2 days ago',
      icon: '📹'
    },
    {
      id: 5,
      type: 'topup',
      description: 'Points Top-up',
      amount: 500,
      date: '3 days ago',
      icon: '💳'
    }
  ];

  const rewards = [
    {
      id: 1,
      title: 'Free Coffee',
      description: 'Get a free coffee from any partner café',
      points: 100,
      image: '/placeholder.svg',
      category: 'Beverages'
    },
    {
      id: 2,
      title: '20% Off Pizza',
      description: 'Save 20% on your next pizza order',
      points: 150,
      image: '/placeholder.svg',
      category: 'Food'
    },
    {
      id: 3,
      title: 'Free Delivery',
      description: 'Get free delivery on orders above ₹300',
      points: 75,
      image: '/placeholder.svg',
      category: 'Delivery'
    },
    {
      id: 4,
      title: 'Burger Combo',
      description: 'Buy 1 Get 1 burger combo deal',
      points: 200,
      image: '/placeholder.svg',
      category: 'Food'
    },
    {
      id: 5,
      title: '₹50 Off',
      description: 'Get ₹50 off on orders above ₹500',
      points: 250,
      image: '/placeholder.svg',
      category: 'Discount'
    },
    {
      id: 6,
      title: 'Premium Access',
      description: '1 month premium membership',
      points: 1000,
      image: '/placeholder.svg',
      category: 'Premium'
    }
  ];

  const topUpOptions = [
    { amount: 500, bonus: 0, popular: false },
    { amount: 1000, bonus: 100, popular: true },
    { amount: 2000, bonus: 300, popular: false },
    { amount: 5000, bonus: 1000, popular: false }
  ];

  const handleTopUp = (amount: number) => {
    // This would normally integrate with a payment gateway
    setCravePoints(cravePoints + amount);
    setTopUpAmount('');
  };

  const redeemReward = (reward: any) => {
    if (cravePoints >= reward.points) {
      setCravePoints(cravePoints - reward.points);
      // Show success message
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-7xl mx-auto px-4 py-6">
        {/* Wallet Balance */}
        <Card className="mb-6 bg-gradient-to-r from-primary to-accent text-white">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <Wallet size={24} />
                  <h1 className="text-xl font-bold">Crave Points Wallet</h1>
                </div>
                <p className="text-4xl font-bold">{cravePoints.toLocaleString()} CP</p>
                <p className="text-white/80 mt-1">≈ ₹{(cravePoints * 0.8).toLocaleString()} value</p>
              </div>
              <div className="text-6xl opacity-50">💰</div>
            </div>
            <div className="flex gap-2 mt-4">
              <Button 
                variant="secondary" 
                className="text-primary"
                onClick={() => document.getElementById('topup-section')?.scrollIntoView({behavior: 'smooth'})}
              >
                <Plus size={16} className="mr-2" />
                Top Up Points
              </Button>
              <Button 
                variant="outline" 
                className="border-white text-white hover:bg-white hover:text-primary"
                onClick={() => document.getElementById('rewards-section')?.scrollIntoView({behavior: 'smooth'})}
              >
                <Gift size={16} className="mr-2" />
                Redeem Rewards
              </Button>
            </div>
          </CardContent>
        </Card>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Recent Transactions */}
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle>Recent Transactions</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {transactions.map((transaction) => (
                    <div key={transaction.id} className="flex items-center justify-between p-3 border border-border rounded-lg">
                      <div className="flex items-center gap-3">
                        <div className="text-2xl">{transaction.icon}</div>
                        <div>
                          <p className="font-medium text-foreground">{transaction.description}</p>
                          <p className="text-sm text-muted-foreground">{transaction.date}</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className={`font-bold ${
                          transaction.amount > 0 ? 'text-green-600' : 'text-red-600'
                        }`}>
                          {transaction.amount > 0 ? '+' : ''}{transaction.amount} CP
                        </p>
                        <div className="flex items-center gap-1 text-muted-foreground">
                          {transaction.amount > 0 ? 
                            <ArrowUpRight size={14} /> : 
                            <ArrowDownLeft size={14} />
                          }
                          <span className="text-xs">
                            {transaction.type === 'earned' ? 'Earned' : 
                             transaction.type === 'redeemed' ? 'Redeemed' : 'Top-up'}
                          </span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                <Button variant="outline" className="w-full mt-4">
                  View All Transactions
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Quick Stats */}
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>This Week</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Points Earned</span>
                    <span className="font-medium text-green-600">+425 CP</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Points Spent</span>
                    <span className="font-medium text-red-600">-200 CP</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Net Gain</span>
                    <span className="font-medium text-primary">+225 CP</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Ways to Earn</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-sm">Order food</span>
                    <Badge variant="secondary">10-100 CP</Badge>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm">Upload reels</span>
                    <Badge variant="secondary">50-100 CP</Badge>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm">Daily tasks</span>
                    <Badge variant="secondary">25-75 CP</Badge>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm">Referrals</span>
                    <Badge variant="secondary">200 CP</Badge>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Top Up Section */}
        <Card className="mt-8" id="topup-section">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <CreditCard size={20} />
              Top Up Crave Points
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
              {topUpOptions.map((option) => (
                <Card key={option.amount} className={`cursor-pointer transition-all hover:shadow-lg ${
                  option.popular ? 'ring-2 ring-primary' : ''
                }`}>
                  <CardContent className="p-4 text-center">
                    {option.popular && (
                      <Badge className="mb-2 bg-primary text-white">Most Popular</Badge>
                    )}
                    <p className="text-2xl font-bold text-primary">{option.amount} CP</p>
                    <p className="text-sm text-muted-foreground">₹{(option.amount * 0.8).toFixed(0)}</p>
                    {option.bonus > 0 && (
                      <p className="text-xs text-green-600 font-medium">+{option.bonus} bonus CP</p>
                    )}
                    <Button 
                      className="w-full mt-3" 
                      size="sm"
                      onClick={() => handleTopUp(option.amount + option.bonus)}
                    >
                      Buy Now
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="flex gap-2">
              <Input
                type="number"
                placeholder="Custom amount"
                value={topUpAmount}
                onChange={(e) => setTopUpAmount(e.target.value)}
                className="flex-1"
              />
              <Button 
                onClick={() => handleTopUp(parseInt(topUpAmount) || 0)}
                disabled={!topUpAmount || parseInt(topUpAmount) < 100}
              >
                Top Up
              </Button>
            </div>
            <p className="text-xs text-muted-foreground mt-2">
              Minimum top-up amount is 100 CP. Secure payment via Razorpay.
            </p>
          </CardContent>
        </Card>

        {/* Rewards Section */}
        <Card className="mt-8" id="rewards-section">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Gift size={20} />
              Redeem Rewards
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {rewards.map((reward) => (
                <Card key={reward.id} className="overflow-hidden">
                  <img 
                    src={reward.image} 
                    alt={reward.title}
                    className="w-full h-32 object-cover"
                  />
                  <CardContent className="p-4">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="font-semibold text-foreground">{reward.title}</h3>
                      <Badge variant="outline">{reward.category}</Badge>
                    </div>
                    <p className="text-sm text-muted-foreground mb-3">{reward.description}</p>
                    <div className="flex items-center justify-between">
                      <span className="font-bold text-primary">{reward.points} CP</span>
                      <Button 
                        size="sm"
                        disabled={cravePoints < reward.points}
                        onClick={() => redeemReward(reward)}
                      >
                        {cravePoints < reward.points ? 'Not Enough' : 'Redeem'}
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default WalletPage;
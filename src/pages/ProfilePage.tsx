import React, { useState } from 'react';
import { Edit, MapPin, Star, Trophy, Calendar, Settings, Camera, Heart, CreditCard, Crown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const ProfilePage = () => {
  const [user] = useState({
    name: "Alex Johnson",
    username: "alex_foodie",
    email: "alex@student.university.edu",
    bio: "Food lover 🍕 | Student 📚 | Always hunting for the best deals 💰",
    avatar: "/placeholder.svg",
    joinDate: "March 2024",
    location: "New Delhi, India",
    points: 1250,
    level: "Food Explorer",
    completedOrders: 47,
    savedPlaces: 23,
    reviews: 15,
    reels: 8
  });

  const recentOrders = [
    {
      id: 1,
      restaurant: "Pizza Paradise",
      items: "Margherita Pizza, Garlic Bread",
      date: "2 hours ago",
      amount: "₹485",
      points: 50,
      rating: 5,
      status: "Delivered"
    },
    {
      id: 2,
      restaurant: "Bean There Coffee",
      items: "Cappuccino, Blueberry Muffin",
      date: "Yesterday",
      amount: "₹280",
      points: 35,
      rating: 4,
      status: "Delivered"
    },
    {
      id: 3,
      restaurant: "Burger Junction",
      items: "Classic Burger, Fries",
      date: "3 days ago",
      amount: "₹350",
      points: 40,
      rating: 5,
      status: "Delivered"
    }
  ];

  const achievements = [
    { icon: "🏆", title: "First Order", description: "Placed your first order" },
    { icon: "⭐", title: "Reviewer", description: "Left 10+ reviews" },
    { icon: "🔥", title: "Streak Master", description: "7-day ordering streak" },
    { icon: "👑", title: "VIP Member", description: "1000+ Crave Points earned" },
    { icon: "📹", title: "Content Creator", description: "Uploaded 5+ reels" },
    { icon: "💎", title: "Explorer", description: "Tried 20+ restaurants" }
  ];

  const favoriteRestaurants = [
    { name: "Pizza Paradise", visits: 8, image: "/placeholder.svg" },
    { name: "Bean There Coffee", visits: 12, image: "/placeholder.svg" },
    { name: "Burger Junction", visits: 6, image: "/placeholder.svg" },
    { name: "Green Bowl", visits: 4, image: "/placeholder.svg" }
  ];

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-7xl mx-auto px-4 py-6">
        {/* Profile Header */}
        <Card className="mb-6">
          <CardContent className="p-6">
            <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
              <div className="relative">
                <Avatar className="w-24 h-24">
                  <AvatarImage src={user.avatar} alt={user.name} />
                  <AvatarFallback className="text-2xl">{user.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                </Avatar>
                <Button 
                  size="sm" 
                  variant="outline" 
                  className="absolute -bottom-2 -right-2 rounded-full w-8 h-8 p-0"
                  onClick={() => window.location.href = '/profile/edit'}
                >
                  <Camera size={14} />
                </Button>
              </div>
              
              <div className="flex-1 text-center md:text-left">
                <div className="flex flex-col md:flex-row md:items-center gap-2 mb-2">
                  <h1 className="text-2xl font-bold text-foreground">{user.name}</h1>
                  <Badge className="bg-gradient-to-r from-primary to-accent text-white">
                    {user.level}
                  </Badge>
                </div>
                <p className="text-muted-foreground mb-2">@{user.username}</p>
                <p className="text-foreground mb-3">{user.bio}</p>
                <div className="flex flex-col md:flex-row gap-4 text-sm text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <MapPin size={14} />
                    <span>{user.location}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Calendar size={14} />
                    <span>Joined {user.joinDate}</span>
                  </div>
                </div>
              </div>
              
              <div className="flex flex-col gap-2">
                <div className="flex gap-2">
                  <Button 
                    variant="outline"
                    onClick={() => window.location.href = '/profile/edit'}
                  >
                    <Edit size={16} className="mr-2" />
                    Edit Profile
                  </Button>
                  <Button 
                    variant="outline"
                    onClick={() => window.location.href = '/settings'}
                  >
                    <Settings size={16} />
                  </Button>
                </div>
                <div className="flex gap-2">
                  <Button 
                    variant="outline"
                    className="flex-1"
                    onClick={() => window.location.href = '/profile/loyalty'}
                  >
                    <Crown size={16} className="mr-2" />
                    Loyalty Cards
                  </Button>
                  <Button 
                    variant="outline"
                    className="flex-1"
                    onClick={() => window.location.href = '/wallet'}
                  >
                    <CreditCard size={16} className="mr-2" />
                    Wallet
                  </Button>
                </div>
              </div>
            </div>
            
            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6 pt-6 border-t border-border">
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">{user.points}</div>
                <div className="text-sm text-muted-foreground">Crave Points</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">{user.completedOrders}</div>
                <div className="text-sm text-muted-foreground">Orders</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">{user.reviews}</div>
                <div className="text-sm text-muted-foreground">Reviews</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">{user.reels}</div>
                <div className="text-sm text-muted-foreground">Reels</div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Tabs */}
        <Tabs defaultValue="orders" className="space-y-6">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="orders">Orders</TabsTrigger>
            <TabsTrigger value="achievements">Achievements</TabsTrigger>
            <TabsTrigger value="favorites">Favorites</TabsTrigger>
            <TabsTrigger value="reviews">Reviews</TabsTrigger>
          </TabsList>

          {/* Orders Tab */}
          <TabsContent value="orders">
            <Card>
              <CardHeader>
                <CardTitle>Recent Orders</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {recentOrders.map((order) => (
                  <div key={order.id} className="flex items-center justify-between p-4 border border-border rounded-lg">
                    <div className="flex-1">
                      <h4 className="font-medium text-foreground">{order.restaurant}</h4>
                      <p className="text-sm text-muted-foreground">{order.items}</p>
                      <p className="text-xs text-muted-foreground">{order.date}</p>
                    </div>
                    <div className="text-right">
                      <p className="font-medium text-foreground">{order.amount}</p>
                      <div className="flex items-center gap-2">
                        <Badge variant="secondary">+{order.points} CP</Badge>
                        <div className="flex">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              size={12}
                              className={i < order.rating ? "text-yellow-500 fill-current" : "text-gray-300"}
                            />
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
                <Button variant="outline" className="w-full">
                  View All Orders
                </Button>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Achievements Tab */}
          <TabsContent value="achievements">
            <Card>
              <CardHeader>
                <CardTitle>Achievements</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {achievements.map((achievement, index) => (
                    <div key={index} className="flex items-center gap-3 p-4 border border-border rounded-lg">
                      <div className="text-2xl">{achievement.icon}</div>
                      <div>
                        <h4 className="font-medium text-foreground">{achievement.title}</h4>
                        <p className="text-sm text-muted-foreground">{achievement.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Favorites Tab */}
          <TabsContent value="favorites">
            <Card>
              <CardHeader>
                <CardTitle>Favorite Restaurants</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {favoriteRestaurants.map((restaurant, index) => (
                    <div key={index} className="flex items-center gap-4 p-4 border border-border rounded-lg">
                      <img 
                        src={restaurant.image} 
                        alt={restaurant.name}
                        className="w-16 h-16 rounded-lg object-cover"
                      />
                      <div className="flex-1">
                        <h4 className="font-medium text-foreground">{restaurant.name}</h4>
                        <p className="text-sm text-muted-foreground">{restaurant.visits} visits</p>
                      </div>
                      <Heart className="text-red-500" size={20} fill="currentColor" />
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Reviews Tab */}
          <TabsContent value="reviews">
            <Card>
              <CardHeader>
                <CardTitle>Your Reviews</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {recentOrders.map((order) => (
                    <div key={order.id} className="p-4 border border-border rounded-lg">
                      <div className="flex items-center justify-between mb-2">
                        <h4 className="font-medium text-foreground">{order.restaurant}</h4>
                        <div className="flex">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              size={16}
                              className={i < order.rating ? "text-yellow-500 fill-current" : "text-gray-300"}
                            />
                          ))}
                        </div>
                      </div>
                      <p className="text-sm text-muted-foreground mb-2">
                        "Great food and quick delivery! The {order.items.split(',')[0]} was amazing."
                      </p>
                      <p className="text-xs text-muted-foreground">{order.date}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default ProfilePage;

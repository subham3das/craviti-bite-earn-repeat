
import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { Star, Clock, MapPin, Heart, ShoppingCart, Calendar, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const RestaurantPage = () => {
  const { id } = useParams();
  const [cartItems, setCartItems] = useState<any[]>([]);
  const [selectedTime, setSelectedTime] = useState('');
  const [selectedSeats, setSelectedSeats] = useState(1);

  // Mock restaurant data
  const restaurant = {
    id: id || '1',
    name: "Pizza Paradise",
    image: "/placeholder.svg",
    rating: 4.5,
    reviews: 324,
    cuisine: "Italian, Fast Food",
    distance: "0.5 km",
    time: "15-20 min",
    address: "Near Main Gate, University Campus",
    points: 50,
    isOpen: true,
    hasTableReservation: true,
    tables: 12
  };

  const menuCategories = [
    {
      name: "Bestsellers",
      items: [
        { id: 1, name: "Margherita Pizza", price: 299, image: "/placeholder.svg", description: "Classic tomato sauce, mozzarella & basil", points: 30, isVeg: true },
        { id: 2, name: "Chicken Tikka Pizza", price: 449, image: "/placeholder.svg", description: "Spicy chicken tikka with peppers & onions", points: 45, isVeg: false },
        { id: 3, name: "Garlic Bread", price: 149, image: "/placeholder.svg", description: "Crispy bread with garlic butter & herbs", points: 15, isVeg: true }
      ]
    },
    {
      name: "Pizzas",
      items: [
        { id: 4, name: "Pepperoni Classic", price: 399, image: "/placeholder.svg", description: "Pepperoni with cheese & tomato sauce", points: 40, isVeg: false },
        { id: 5, name: "Veggie Supreme", price: 359, image: "/placeholder.svg", description: "Bell peppers, mushrooms, olives & cheese", points: 36, isVeg: true },
        { id: 6, name: "BBQ Chicken", price: 479, image: "/placeholder.svg", description: "BBQ chicken with onions & cheese", points: 48, isVeg: false }
      ]
    },
    {
      name: "Beverages",
      items: [
        { id: 7, name: "Coca Cola", price: 60, image: "/placeholder.svg", description: "Chilled soft drink", points: 6, isVeg: true },
        { id: 8, name: "Fresh Lime Soda", price: 80, image: "/placeholder.svg", description: "Fresh lime with soda water", points: 8, isVeg: true },
        { id: 9, name: "Iced Coffee", price: 120, image: "/placeholder.svg", description: "Cold brew coffee with ice", points: 12, isVeg: true }
      ]
    }
  ];

  const timeSlots = [
    "Now", "30 min", "1 hour", "1.5 hours", "2 hours", "2.5 hours", "3 hours"
  ];

  const addToCart = (item: any) => {
    const existingItem = cartItems.find(cartItem => cartItem.id === item.id);
    if (existingItem) {
      setCartItems(cartItems.map(cartItem => 
        cartItem.id === item.id 
          ? { ...cartItem, quantity: cartItem.quantity + 1 }
          : cartItem
      ));
    } else {
      setCartItems([...cartItems, { ...item, quantity: 1 }]);
    }
  };

  const getTotalAmount = () => {
    return cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);
  };

  const getTotalPoints = () => {
    return cartItems.reduce((total, item) => total + (item.points * item.quantity), 0);
  };

  const proceedToCheckout = () => {
    const orderData = {
      restaurant,
      items: cartItems,
      totalAmount: getTotalAmount(),
      totalPoints: getTotalPoints(),
      walkInTime: selectedTime,
      seats: selectedSeats
    };
    localStorage.setItem('orderData', JSON.stringify(orderData));
    window.location.href = '/checkout';
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-7xl mx-auto px-4 py-6">
        {/* Restaurant Header */}
        <Card className="mb-6 overflow-hidden">
          <div className="relative h-64 bg-gradient-to-r from-primary to-accent">
            <img 
              src={restaurant.image} 
              alt={restaurant.name}
              className="w-full h-full object-cover opacity-80"
            />
            <div className="absolute inset-0 bg-black/40 flex items-end">
              <div className="p-6 text-white">
                <h1 className="text-3xl font-bold mb-2">{restaurant.name}</h1>
                <div className="flex items-center gap-4 mb-2">
                  <div className="flex items-center gap-1">
                    <Star className="text-yellow-400" size={20} fill="currentColor" />
                    <span className="font-medium">{restaurant.rating}</span>
                    <span className="text-white/80">({restaurant.reviews} reviews)</span>
                  </div>
                  <Badge className="bg-green-500 text-white">
                    {restaurant.isOpen ? 'Open' : 'Closed'}
                  </Badge>
                </div>
                <div className="flex items-center gap-4 text-sm">
                  <div className="flex items-center gap-1">
                    <MapPin size={16} />
                    <span>{restaurant.distance}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock size={16} />
                    <span>{restaurant.time}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <span>🏆</span>
                    <span>+{restaurant.points} CP per order</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Card>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Menu Section */}
          <div className="lg:col-span-2">
            <Tabs defaultValue="Bestsellers" className="w-full">
              <TabsList className="grid grid-cols-3 w-full mb-6">
                {menuCategories.map((category) => (
                  <TabsTrigger key={category.name} value={category.name}>
                    {category.name}
                  </TabsTrigger>
                ))}
              </TabsList>

              {menuCategories.map((category) => (
                <TabsContent key={category.name} value={category.name}>
                  <div className="space-y-4">
                    {category.items.map((item) => (
                      <Card key={item.id} className="overflow-hidden">
                        <CardContent className="p-4">
                          <div className="flex gap-4">
                            <img 
                              src={item.image} 
                              alt={item.name}
                              className="w-24 h-24 rounded-lg object-cover"
                            />
                            <div className="flex-1">
                              <div className="flex items-start justify-between mb-2">
                                <div>
                                  <h3 className="font-semibold text-foreground flex items-center gap-2">
                                    {item.name}
                                    {item.isVeg ? (
                                      <div className="w-4 h-4 border-2 border-green-600 flex items-center justify-center">
                                        <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                                      </div>
                                    ) : (
                                      <div className="w-4 h-4 border-2 border-red-600 flex items-center justify-center">
                                        <div className="w-2 h-2 bg-red-600 rounded-full"></div>
                                      </div>
                                    )}
                                  </h3>
                                  <p className="text-sm text-muted-foreground">{item.description}</p>
                                </div>
                                <Heart className="text-muted-foreground hover:text-red-500 cursor-pointer" size={20} />
                              </div>
                              <div className="flex items-center justify-between">
                                <div>
                                  <span className="text-lg font-bold text-foreground">₹{item.price}</span>
                                  <span className="text-sm text-green-600 ml-2">+{item.points} CP</span>
                                </div>
                                <Button 
                                  size="sm"
                                  onClick={() => addToCart(item)}
                                >
                                  <ShoppingCart size={16} className="mr-1" />
                                  Add
                                </Button>
                              </div>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </TabsContent>
              ))}
            </Tabs>
          </div>

          {/* Order Summary & Walk-in Details */}
          <div className="space-y-6">
            {/* Walk-in Time Selection */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Calendar size={20} />
                  Walk-in Time
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-2 mb-4">
                  {timeSlots.map((time) => (
                    <Button 
                      key={time}
                      variant={selectedTime === time ? "default" : "outline"}
                      size="sm"
                      onClick={() => setSelectedTime(time)}
                    >
                      {time}
                    </Button>
                  ))}
                </div>
                
                {restaurant.hasTableReservation && (
                  <div className="mt-4">
                    <label className="block text-sm font-medium mb-2">Number of Seats</label>
                    <div className="flex items-center gap-2">
                      <Users size={16} />
                      <select 
                        value={selectedSeats}
                        onChange={(e) => setSelectedSeats(parseInt(e.target.value))}
                        className="flex-1 p-2 border rounded-md"
                      >
                        {[1,2,3,4,5,6].map(num => (
                          <option key={num} value={num}>{num} {num === 1 ? 'seat' : 'seats'}</option>
                        ))}
                      </select>
                    </div>
                    <p className="text-xs text-muted-foreground mt-1">
                      Pre-booking fee: ₹20 per seat (adjustable with bill)
                    </p>
                  </div>
                )}
              </CardContent>
            </Card>

            {/* Cart Summary */}
            <Card>
              <CardHeader>
                <CardTitle>Your Order ({cartItems.reduce((sum, item) => sum + item.quantity, 0)} items)</CardTitle>
              </CardHeader>
              <CardContent>
                {cartItems.length === 0 ? (
                  <p className="text-muted-foreground text-center py-4">Your cart is empty</p>
                ) : (
                  <div className="space-y-3">
                    {cartItems.map((item) => (
                      <div key={item.id} className="flex justify-between items-center">
                        <div>
                          <p className="font-medium">{item.name}</p>
                          <p className="text-sm text-muted-foreground">Qty: {item.quantity}</p>
                        </div>
                        <span className="font-medium">₹{item.price * item.quantity}</span>
                      </div>
                    ))}
                    
                    <div className="border-t pt-3">
                      <div className="flex justify-between font-bold">
                        <span>Total Amount</span>
                        <span>₹{getTotalAmount()}</span>
                      </div>
                      <div className="flex justify-between text-green-600">
                        <span>Total Points</span>
                        <span>+{getTotalPoints()} CP</span>
                      </div>
                      {restaurant.hasTableReservation && selectedSeats > 0 && (
                        <div className="flex justify-between text-sm text-muted-foreground">
                          <span>Pre-booking fee</span>
                          <span>₹{selectedSeats * 20}</span>
                        </div>
                      )}
                    </div>
                    
                    <Button 
                      className="w-full mt-4" 
                      size="lg"
                      disabled={!selectedTime}
                      onClick={proceedToCheckout}
                    >
                      Proceed to Checkout
                    </Button>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RestaurantPage;

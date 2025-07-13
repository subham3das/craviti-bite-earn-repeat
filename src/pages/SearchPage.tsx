import React, { useState } from 'react';
import { Search, Filter, MapPin, Star, Clock, DollarSign } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';

const SearchPage = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedFilter, setSelectedFilter] = useState('all');

  const filters = [
    { id: 'all', label: 'All', count: 245 },
    { id: 'cafes', label: 'Cafés', count: 120 },
    { id: 'restaurants', label: 'Restaurants', count: 95 },
    { id: 'high-points', label: 'High Points', count: 30 },
    { id: 'nearby', label: 'Nearby', count: 68 }
  ];

  const restaurants = [
    {
      id: 1,
      name: "Bean There Coffee",
      type: "Café",
      distance: "0.2 km",
      rating: 4.8,
      points: 50,
      image: "/placeholder.svg",
      tags: ["Coffee", "Pastries", "WiFi"],
      estimatedTime: "5-10 min",
      priceRange: "₹₹"
    },
    {
      id: 2,
      name: "Pizza Paradise",
      type: "Restaurant",
      distance: "0.5 km",
      rating: 4.6,
      points: 75,
      image: "/placeholder.svg",
      tags: ["Pizza", "Italian", "Delivery"],
      estimatedTime: "15-20 min",
      priceRange: "₹₹₹"
    },
    {
      id: 3,
      name: "Burger Junction",
      type: "Fast Food",
      distance: "0.8 km",
      rating: 4.4,
      points: 40,
      image: "/placeholder.svg",
      tags: ["Burgers", "Fries", "Quick"],
      estimatedTime: "10-15 min",
      priceRange: "₹₹"
    },
    {
      id: 4,
      name: "Green Bowl",
      type: "Healthy",
      distance: "1.2 km",
      rating: 4.9,
      points: 60,
      image: "/placeholder.svg",
      tags: ["Salads", "Smoothies", "Vegan"],
      estimatedTime: "8-12 min",
      priceRange: "₹₹₹"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-7xl mx-auto px-4 py-6">
        {/* Search Header */}
        <div className="mb-6">
          <h1 className="text-2xl font-bold text-foreground mb-4">Find Your Next Meal 🍕</h1>
          
          {/* Search Bar */}
          <div className="relative mb-4">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" size={20} />
            <Input
              type="text"
              placeholder="Search for restaurants, cafés, or dishes..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10 py-3 text-lg"
            />
            <Button variant="outline" size="sm" className="absolute right-2 top-1/2 transform -translate-y-1/2">
              <Filter size={16} />
            </Button>
          </div>

          {/* Filter Chips */}
          <div className="flex flex-wrap gap-2">
            {filters.map((filter) => (
              <Button
                key={filter.id}
                variant={selectedFilter === filter.id ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedFilter(filter.id)}
                className="text-sm"
              >
                {filter.label} ({filter.count})
              </Button>
            ))}
          </div>
        </div>

        {/* Results */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {restaurants.map((restaurant) => (
            <Card key={restaurant.id} className="overflow-hidden hover:shadow-lg transition-shadow cursor-pointer">
              <div className="relative">
                <img
                  src={restaurant.image}
                  alt={restaurant.name}
                  className="w-full h-48 object-cover"
                />
                <Badge className="absolute top-3 right-3 bg-primary text-white">
                  {restaurant.points} CP
                </Badge>
              </div>
              
              <CardContent className="p-4">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-semibold text-lg text-foreground">{restaurant.name}</h3>
                  <Badge variant="secondary" className="text-xs">
                    {restaurant.type}
                  </Badge>
                </div>
                
                <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
                  <div className="flex items-center gap-1">
                    <Star className="text-yellow-500" size={14} fill="currentColor" />
                    <span>{restaurant.rating}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <MapPin size={14} />
                    <span>{restaurant.distance}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock size={14} />
                    <span>{restaurant.estimatedTime}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <DollarSign size={14} />
                    <span>{restaurant.priceRange}</span>
                  </div>
                </div>
                
                <div className="flex flex-wrap gap-1 mb-3">
                  {restaurant.tags.map((tag) => (
                    <Badge key={tag} variant="outline" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>
                
                <Button className="w-full" onClick={() => window.location.href = `/restaurant/${restaurant.id}`}>
                  View Menu & Order
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SearchPage;
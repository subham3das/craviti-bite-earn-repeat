import React, { useState, useEffect } from 'react';
import { MapPin, Navigation, Star, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const NearMePage = () => {
  const [userLocation, setUserLocation] = useState<{lat: number, lng: number} | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate getting user location
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setUserLocation({
            lat: position.coords.latitude,
            lng: position.coords.longitude
          });
          setLoading(false);
        },
        () => {
          // Default to a sample location if permission denied
          setUserLocation({ lat: 28.6139, lng: 77.2090 }); // Delhi
          setLoading(false);
        }
      );
    } else {
      setUserLocation({ lat: 28.6139, lng: 77.2090 });
      setLoading(false);
    }
  }, []);

  const nearbyPlaces = [
    {
      id: 1,
      name: "Café Mocha",
      type: "Café",
      distance: "50m",
      walkTime: "1 min",
      rating: 4.7,
      points: 45,
      status: "Open",
      address: "Ground Floor, XYZ Building",
      specialOffer: "20% off on first order"
    },
    {
      id: 2,
      name: "Student Bites",
      type: "Restaurant",
      distance: "120m",
      walkTime: "2 min",
      rating: 4.5,
      points: 60,
      status: "Open",
      address: "Near Main Gate",
      specialOffer: "Buy 1 Get 1 on snacks"
    },
    {
      id: 3,
      name: "Quick Eats",
      type: "Fast Food",
      distance: "200m",
      walkTime: "3 min",
      rating: 4.3,
      points: 35,
      status: "Closing Soon",
      address: "Food Court, Block A",
      specialOffer: "Free delivery"
    },
    {
      id: 4,
      name: "Healthy Corner",
      type: "Healthy",
      distance: "300m",
      walkTime: "4 min",
      rating: 4.8,
      points: 55,
      status: "Open",
      address: "Near Library",
      specialOffer: "Fresh juice combo"
    }
  ];

  if (loading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto mb-4"></div>
          <p className="text-muted-foreground">Finding places near you...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-7xl mx-auto px-4 py-6">
        {/* Header */}
        <div className="mb-6">
          <div className="flex items-center gap-2 mb-2">
            <MapPin className="text-primary" size={24} />
            <h1 className="text-2xl font-bold text-foreground">Places Near You</h1>
          </div>
          <p className="text-muted-foreground">Found {nearbyPlaces.length} places within 500m</p>
        </div>

        {/* Map Placeholder */}
        <Card className="mb-6 overflow-hidden">
          <div className="h-64 bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center relative">
            <div className="text-center">
              <MapPin className="text-primary mx-auto mb-2" size={32} />
              <p className="text-foreground font-medium">Interactive Map</p>
              <p className="text-sm text-muted-foreground">Your location and nearby restaurants</p>
            </div>
            <Badge className="absolute top-4 right-4 bg-green-500 text-white">
              📍 You are here
            </Badge>
          </div>
        </Card>

        {/* Nearby Places List */}
        <div className="space-y-4">
          {nearbyPlaces.map((place) => (
            <Card key={place.id} className="hover:shadow-lg transition-shadow">
              <CardContent className="p-4">
                <div className="flex items-center justify-between mb-3">
                  <div>
                    <h3 className="font-semibold text-lg text-foreground">{place.name}</h3>
                    <p className="text-sm text-muted-foreground">{place.address}</p>
                  </div>
                  <div className="text-right">
                    <Badge 
                      variant={place.status === "Open" ? "default" : "secondary"}
                      className={place.status === "Open" ? "bg-green-500" : "bg-orange-500"}
                    >
                      {place.status}
                    </Badge>
                  </div>
                </div>

                <div className="flex items-center gap-6 mb-3 text-sm text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <Navigation size={14} />
                    <span>{place.distance} away</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock size={14} />
                    <span>{place.walkTime} walk</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Star className="text-yellow-500" size={14} fill="currentColor" />
                    <span>{place.rating}</span>
                  </div>
                </div>

                {place.specialOffer && (
                  <div className="bg-accent/10 text-accent-foreground px-3 py-2 rounded-lg mb-3 text-sm">
                    🎉 {place.specialOffer}
                  </div>
                )}

                <div className="flex items-center justify-between">
                  <Badge className="bg-primary text-white">
                    Earn {place.points} CP
                  </Badge>
                  <div className="flex gap-2">
                    <Button variant="outline" size="sm" onClick={() => window.location.href = `/restaurant/${place.id}/menu`}>
                      View Menu
                    </Button>
                    <Button size="sm" onClick={() => window.location.href = `/restaurant/${place.id}/order`}>
                      Order Now
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Quick Actions */}
        <div className="mt-8 text-center">
          <Button 
            variant="outline" 
            className="mb-4"
            onClick={() => window.location.reload()}
          >
            🔄 Refresh Nearby Places
          </Button>
          <p className="text-sm text-muted-foreground">
            Can't find what you're looking for? <br />
            <Button variant="link" className="p-0 h-auto" onClick={() => window.location.href = '/search'}>
              Search all restaurants
            </Button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default NearMePage;
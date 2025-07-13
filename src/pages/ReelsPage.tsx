import React, { useState } from 'react';
import { Play, Heart, MessageCircle, Share, Upload, Camera, Plus } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const ReelsPage = () => {
  const [activeReel, setActiveReel] = useState(0);
  
  const reels = [
    {
      id: 1,
      username: "foodie_sarah",
      avatar: "/placeholder.svg",
      video: "/placeholder.svg",
      caption: "Best pizza in town! 🍕 #Craviti #PizzaLove",
      likes: 1234,
      comments: 89,
      shares: 23,
      restaurant: "Pizza Paradise",
      points: 50,
      isLiked: false
    },
    {
      id: 2,
      username: "hungry_student",
      avatar: "/placeholder.svg",
      video: "/placeholder.svg",
      caption: "Late night cravings satisfied! 🌮 #CravitiFam",
      likes: 856,
      comments: 45,
      shares: 12,
      restaurant: "Taco Bell",
      points: 35,
      isLiked: true
    },
    {
      id: 3,
      username: "coffee_addict",
      avatar: "/placeholder.svg",
      video: "/placeholder.svg",
      caption: "Perfect latte art ☕ #MorningBoost #Craviti",
      likes: 2156,
      comments: 156,
      shares: 87,
      restaurant: "Bean There Coffee",
      points: 75,
      isLiked: false
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-7xl mx-auto px-4 py-6">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <div>
            <h1 className="text-2xl font-bold text-foreground">Food Reels 📹</h1>
            <p className="text-muted-foreground">Share your food adventures & earn points!</p>
          </div>
          <Button 
            className="bg-gradient-to-r from-primary to-accent text-white"
            onClick={() => window.location.href = '/reels/upload'}
          >
            <Plus size={20} className="mr-2" />
            Create Reel
          </Button>
        </div>

        {/* Mobile-style Reels Feed */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reels.map((reel, index) => (
            <Card key={reel.id} className="overflow-hidden relative group">
              <div className="relative aspect-[9/16] bg-black rounded-lg overflow-hidden">
                {/* Video Placeholder */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent">
                  <img 
                    src={reel.video} 
                    alt="Video thumbnail"
                    className="w-full h-full object-cover"
                  />
                  
                  {/* Play Button */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Button 
                      size="lg" 
                      className="rounded-full w-16 h-16 bg-white/20 backdrop-blur-sm border-2 border-white/30 hover:bg-white/30"
                      onClick={() => setActiveReel(index)}
                    >
                      <Play size={24} className="text-white ml-1" fill="currentColor" />
                    </Button>
                  </div>
                </div>

                {/* User Info Overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                  <div className="flex items-center gap-3 mb-2">
                    <img 
                      src={reel.avatar} 
                      alt={reel.username}
                      className="w-8 h-8 rounded-full border-2 border-white"
                    />
                    <span className="font-medium">@{reel.username}</span>
                    <Badge className="bg-primary text-white">
                      +{reel.points} CP
                    </Badge>
                  </div>
                  
                  <p className="text-sm mb-2">{reel.caption}</p>
                  
                  <div className="flex items-center gap-1 text-sm">
                    <span>📍</span>
                    <span>{reel.restaurant}</span>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="absolute right-4 bottom-20 flex flex-col gap-4">
                  <Button 
                    size="sm" 
                    variant="ghost" 
                    className="rounded-full w-12 h-12 bg-white/20 backdrop-blur-sm text-white hover:bg-white/30"
                  >
                    <Heart 
                      size={20} 
                      className={reel.isLiked ? "text-red-500" : "text-white"}
                      fill={reel.isLiked ? "currentColor" : "none"}
                    />
                  </Button>
                  <div className="text-white text-xs text-center font-medium">
                    {reel.likes}
                  </div>
                  
                  <Button 
                    size="sm" 
                    variant="ghost" 
                    className="rounded-full w-12 h-12 bg-white/20 backdrop-blur-sm text-white hover:bg-white/30"
                  >
                    <MessageCircle size={20} />
                  </Button>
                  <div className="text-white text-xs text-center font-medium">
                    {reel.comments}
                  </div>
                  
                  <Button 
                    size="sm" 
                    variant="ghost" 
                    className="rounded-full w-12 h-12 bg-white/20 backdrop-blur-sm text-white hover:bg-white/30"
                  >
                    <Share size={20} />
                  </Button>
                  <div className="text-white text-xs text-center font-medium">
                    {reel.shares}
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Upload Section */}
        <Card className="mt-8 bg-gradient-to-r from-primary/10 to-accent/10">
          <CardContent className="p-6 text-center">
            <Camera className="mx-auto mb-4 text-primary" size={48} />
            <h3 className="text-xl font-bold text-foreground mb-2">Share Your Food Story</h3>
            <p className="text-muted-foreground mb-4">
              Upload a reel of your meal and earn up to 100 Crave Points!
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
              <div className="text-center">
                <div className="text-2xl mb-2">📱</div>
                <p className="font-medium">Record</p>
                <p className="text-sm text-muted-foreground">Film your food experience</p>
              </div>
              <div className="text-center">
                <div className="text-2xl mb-2">✨</div>
                <p className="font-medium">Edit</p>
                <p className="text-sm text-muted-foreground">Add filters & music</p>
              </div>
              <div className="text-center">
                <div className="text-2xl mb-2">🎉</div>
                <p className="font-medium">Earn</p>
                <p className="text-sm text-muted-foreground">Get points & rewards</p>
              </div>
            </div>
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-primary to-accent text-white"
              onClick={() => window.location.href = '/reels/upload'}
            >
              <Upload size={20} className="mr-2" />
              Start Creating
            </Button>
          </CardContent>
        </Card>

        {/* Trending Hashtags */}
        <div className="mt-8">
          <h3 className="text-lg font-bold text-foreground mb-4">Trending Now 🔥</h3>
          <div className="flex flex-wrap gap-2">
            {['#CravitiFam', '#FoodieLife', '#CampusEats', '#StudentDeals', '#FoodReels', '#TasteTest'].map((tag) => (
              <Badge key={tag} variant="outline" className="cursor-pointer hover:bg-primary hover:text-white">
                {tag}
              </Badge>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReelsPage;
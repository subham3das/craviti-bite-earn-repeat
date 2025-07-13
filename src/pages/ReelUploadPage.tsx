
import React, { useState } from 'react';
import { Upload, Camera, Video, X, MapPin, Hash } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Textarea } from '@/components/ui/textarea';

const ReelUploadPage = () => {
  const [uploadedFile, setUploadedFile] = useState<File | null>(null);
  const [caption, setCaption] = useState('');
  const [restaurant, setRestaurant] = useState('');
  const [hashtags, setHashtags] = useState('#CravitiFam #FoodieLife');
  const [isUploading, setIsUploading] = useState(false);

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setUploadedFile(file);
    }
  };

  const handleUpload = async () => {
    if (!uploadedFile || !caption.trim()) return;
    
    setIsUploading(true);
    
    // Simulate upload process
    setTimeout(() => {
      // Award points for upload
      const currentPoints = parseInt(localStorage.getItem('userPoints') || '1250');
      const newPoints = currentPoints + 75; // Points for uploading reel
      localStorage.setItem('userPoints', newPoints.toString());
      
      setIsUploading(false);
      window.location.href = '/reels?uploaded=true';
    }, 3000);
  };

  const suggestedHashtags = [
    '#CravitiFam', '#FoodieLife', '#CampusEats', '#StudentDeals', 
    '#FoodReels', '#TasteTest', '#FoodLove', '#CravitiEats'
  ];

  const nearbyRestaurants = [
    'Pizza Paradise', 'Bean There Coffee', 'Burger Junction', 
    'Green Bowl', 'Taco Bell', 'Ice Cream Corner'
  ];

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-2xl mx-auto px-4 py-6">
        <div className="mb-6">
          <h1 className="text-2xl font-bold text-foreground mb-2">Create Food Reel 📹</h1>
          <p className="text-muted-foreground">Share your food adventure and earn up to 100 Crave Points!</p>
        </div>

        <div className="space-y-6">
          {/* Upload Section */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Camera size={20} />
                Upload Video
              </CardTitle>
            </CardHeader>
            <CardContent>
              {!uploadedFile ? (
                <div className="border-2 border-dashed border-primary/30 rounded-lg p-8 text-center">
                  <div className="space-y-4">
                    <Video className="mx-auto text-primary" size={48} />
                    <div>
                      <h3 className="font-semibold mb-2">Upload your food video</h3>
                      <p className="text-sm text-muted-foreground mb-4">
                        MP4, MOV up to 100MB. Maximum 60 seconds.
                      </p>
                    </div>
                    <div className="flex flex-col sm:flex-row gap-2 justify-center">
                      <Button 
                        onClick={() => document.getElementById('video-upload')?.click()}
                      >
                        <Upload className="mr-2" size={16} />
                        Choose Video
                      </Button>
                      <Button variant="outline">
                        <Camera className="mr-2" size={16} />
                        Record Now
                      </Button>
                    </div>
                    <input 
                      id="video-upload"
                      type="file" 
                      accept="video/*" 
                      onChange={handleFileUpload}
                      className="hidden"
                    />
                  </div>
                </div>
              ) : (
                <div className="relative">
                  <div className="bg-black rounded-lg aspect-[9/16] max-h-96 mx-auto relative overflow-hidden">
                    <video 
                      src={URL.createObjectURL(uploadedFile)}
                      className="w-full h-full object-cover"
                      controls
                    />
                    <Button 
                      size="sm"
                      variant="destructive"
                      className="absolute top-2 right-2"
                      onClick={() => setUploadedFile(null)}
                    >
                      <X size={16} />
                    </Button>
                  </div>
                  <p className="text-center text-sm text-muted-foreground mt-2">
                    {uploadedFile.name} ({(uploadedFile.size / (1024 * 1024)).toFixed(1)} MB)
                  </p>
                </div>
              )}
            </CardContent>
          </Card>

          {/* Caption & Details */}
          <Card>
            <CardHeader>
              <CardTitle>Add Details</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-2">Caption</label>
                <Textarea 
                  placeholder="Tell us about your food experience..."
                  value={caption}
                  onChange={(e) => setCaption(e.target.value)}
                  maxLength={150}
                />
                <p className="text-xs text-muted-foreground mt-1">
                  {caption.length}/150 characters
                </p>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Restaurant/Café</label>
                <Input 
                  placeholder="Where did you eat?"
                  value={restaurant}
                  onChange={(e) => setRestaurant(e.target.value)}
                />
                <div className="flex flex-wrap gap-1 mt-2">
                  {nearbyRestaurants.map((place) => (
                    <Badge 
                      key={place}
                      variant="outline" 
                      className="cursor-pointer text-xs"
                      onClick={() => setRestaurant(place)}
                    >
                      <MapPin size={10} className="mr-1" />
                      {place}
                    </Badge>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Hashtags</label>
                <Input 
                  placeholder="#CravitiFam #FoodieLife"
                  value={hashtags}
                  onChange={(e) => setHashtags(e.target.value)}
                />
                <div className="flex flex-wrap gap-1 mt-2">
                  {suggestedHashtags.map((tag) => (
                    <Badge 
                      key={tag}
                      variant="outline" 
                      className="cursor-pointer text-xs"
                      onClick={() => {
                        if (!hashtags.includes(tag)) {
                          setHashtags(hashtags + ' ' + tag);
                        }
                      }}
                    >
                      <Hash size={10} className="mr-1" />
                      {tag.replace('#', '')}
                    </Badge>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Rewards Info */}
          <Card className="bg-gradient-to-r from-primary/5 to-accent/5">
            <CardContent className="p-4">
              <h4 className="font-semibold mb-2 flex items-center gap-2">
                🏆 Earn Crave Points
              </h4>
              <div className="text-sm space-y-1">
                <p>• Upload reel: <span className="font-medium text-green-600">+50 CP</span></p>
                <p>• Include restaurant tag: <span className="font-medium text-green-600">+15 CP</span></p>
                <p>• Use trending hashtags: <span className="font-medium text-green-600">+10 CP</span></p>
                <p className="font-medium">Total: <span className="text-green-600">+75 CP</span></p>
              </div>
            </CardContent>
          </Card>

          {/* Upload Button */}
          <Button 
            className="w-full" 
            size="lg"
            disabled={!uploadedFile || !caption.trim() || isUploading}
            onClick={handleUpload}
          >
            {isUploading ? (
              <div className="flex items-center gap-2">
                <div className="animate-spin rounded-full h-4 w-4 border-2 border-white border-t-transparent"></div>
                Uploading...
              </div>
            ) : (
              <>
                <Upload className="mr-2" size={16} />
                Post Reel & Earn Points
              </>
            )}
          </Button>

          <p className="text-xs text-center text-muted-foreground">
            By posting, you agree to our community guidelines and terms of service.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ReelUploadPage;

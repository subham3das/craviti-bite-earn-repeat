import React, { useState } from 'react';
import { Trophy, CheckCircle, Clock, Star, Gift, Target } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';

const TasksPage = () => {
  const [completedTasks, setCompletedTasks] = useState<number[]>([]);
  const [userPoints, setUserPoints] = useState(1250);

  const completeTask = (taskId: number, points: number) => {
    if (!completedTasks.includes(taskId)) {
      setCompletedTasks([...completedTasks, taskId]);
      setUserPoints(userPoints + points);
    }
  };

  const dailyTasks = [
    {
      id: 1,
      title: "Order your first meal today",
      description: "Place any order from nearby restaurants",
      points: 50,
      type: "daily",
      difficulty: "Easy",
      timeLeft: "23h 45m",
      icon: "🍕"
    },
    {
      id: 2,
      title: "Rate a restaurant",
      description: "Share your experience and help others",
      points: 25,
      type: "daily",
      difficulty: "Easy",
      timeLeft: "23h 45m",
      icon: "⭐"
    },
    {
      id: 3,
      title: "Share a food reel",
      description: "Upload a video of your meal",
      points: 75,
      type: "daily",
      difficulty: "Medium",
      timeLeft: "23h 45m",
      icon: "📹"
    }
  ];

  const weeklyTasks = [
    {
      id: 4,
      title: "Complete 5 orders this week",
      description: "Order from any restaurant 5 times",
      points: 200,
      type: "weekly",
      difficulty: "Medium",
      progress: 2,
      total: 5,
      timeLeft: "5 days",
      icon: "🎯"
    },
    {
      id: 5,
      title: "Try 3 new restaurants",
      description: "Explore different cuisines",
      points: 150,
      type: "weekly",
      difficulty: "Medium",
      progress: 1,
      total: 3,
      timeLeft: "5 days",
      icon: "🆕"
    }
  ];

  const specialTasks = [
    {
      id: 6,
      title: "Refer 3 friends",
      description: "Invite friends and earn bonus points",
      points: 500,
      type: "special",
      difficulty: "Hard",
      progress: 1,
      total: 3,
      timeLeft: "No limit",
      icon: "👥"
    },
    {
      id: 7,
      title: "Spend ₹1000 this month",
      description: "Total orders worth ₹1000",
      points: 300,
      type: "special",
      difficulty: "Hard",
      progress: 650,
      total: 1000,
      timeLeft: "12 days",
      icon: "💰"
    }
  ];

  const TaskCard = ({ task, isWeekly = false, isSpecial = false }: any) => {
    const isCompleted = completedTasks.includes(task.id);
    const progressPercentage = task.progress ? (task.progress / task.total) * 100 : 0;

    return (
      <Card className={`transition-all hover:shadow-lg ${isCompleted ? 'bg-green-50 border-green-200' : ''}`}>
        <CardContent className="p-4">
          <div className="flex items-start justify-between mb-3">
            <div className="flex items-center gap-3">
              <div className="text-2xl">{task.icon}</div>
              <div>
                <h3 className="font-semibold text-foreground">{task.title}</h3>
                <p className="text-sm text-muted-foreground">{task.description}</p>
              </div>
            </div>
            <Badge 
              variant={task.difficulty === 'Easy' ? 'default' : task.difficulty === 'Medium' ? 'secondary' : 'destructive'}
              className="text-xs"
            >
              {task.difficulty}
            </Badge>
          </div>

          {(isWeekly || isSpecial) && task.progress !== undefined && (
            <div className="mb-3">
              <div className="flex justify-between text-sm mb-1">
                <span className="text-muted-foreground">Progress</span>
                <span className="font-medium">
                  {task.progress}/{task.total} {isSpecial && task.id === 7 ? '₹' : ''}
                </span>
              </div>
              <Progress value={progressPercentage} className="h-2" />
            </div>
          )}

          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-1">
                <Trophy className="text-primary" size={16} />
                <span className="font-medium text-primary">{task.points} CP</span>
              </div>
              <div className="flex items-center gap-1">
                <Clock size={14} className="text-muted-foreground" />
                <span className="text-sm text-muted-foreground">{task.timeLeft}</span>
              </div>
            </div>
            
            {isCompleted ? (
              <Badge className="bg-green-500 text-white">
                <CheckCircle size={14} className="mr-1" />
                Completed
              </Badge>
            ) : (
              <Button 
                size="sm" 
                onClick={() => completeTask(task.id, task.points)}
                disabled={task.progress === 0 && (isWeekly || isSpecial)}
              >
                {isWeekly || isSpecial ? 'Track Progress' : 'Complete'}
              </Button>
            )}
          </div>
        </CardContent>
      </Card>
    );
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-7xl mx-auto px-4 py-6">
        {/* Header */}
        <div className="mb-6">
          <h1 className="text-2xl font-bold text-foreground mb-2">Tasks & Challenges 🏆</h1>
          <p className="text-muted-foreground">Complete tasks to earn Crave Points and unlock rewards!</p>
        </div>

        {/* Points Overview */}
        <Card className="mb-6 bg-gradient-to-r from-primary to-accent text-white">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-lg font-semibold mb-1">Your Crave Points</h2>
                <p className="text-3xl font-bold">{userPoints.toLocaleString()} CP</p>
              </div>
              <div className="text-4xl">🎉</div>
            </div>
            <div className="mt-4 flex gap-4 text-sm">
              <div>
                <span className="opacity-90">Tasks completed today: </span>
                <span className="font-semibold">{completedTasks.filter(id => id <= 3).length}/3</span>
              </div>
              <div>
                <span className="opacity-90">Total earned this week: </span>
                <span className="font-semibold">425 CP</span>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Daily Tasks */}
        <div className="mb-8">
          <div className="flex items-center gap-2 mb-4">
            <Target className="text-primary" size={24} />
            <h2 className="text-xl font-bold text-foreground">Daily Tasks</h2>
            <Badge variant="secondary">Reset in 23h 45m</Badge>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {dailyTasks.map((task) => (
              <TaskCard key={task.id} task={task} />
            ))}
          </div>
        </div>

        {/* Weekly Challenges */}
        <div className="mb-8">
          <div className="flex items-center gap-2 mb-4">
            <Star className="text-primary" size={24} />
            <h2 className="text-xl font-bold text-foreground">Weekly Challenges</h2>
            <Badge variant="secondary">5 days left</Badge>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {weeklyTasks.map((task) => (
              <TaskCard key={task.id} task={task} isWeekly={true} />
            ))}
          </div>
        </div>

        {/* Special Tasks */}
        <div className="mb-8">
          <div className="flex items-center gap-2 mb-4">
            <Gift className="text-primary" size={24} />
            <h2 className="text-xl font-bold text-foreground">Special Missions</h2>
            <Badge className="bg-gradient-to-r from-primary to-accent text-white">High Rewards</Badge>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {specialTasks.map((task) => (
              <TaskCard key={task.id} task={task} isSpecial={true} />
            ))}
          </div>
        </div>

        {/* Quick Actions */}
        <Card>
          <CardHeader>
            <CardTitle>Quick Actions</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <Button variant="outline" className="h-20 flex-col" onClick={() => window.location.href = '/search'}>
                <span className="text-2xl mb-1">🔍</span>
                <span className="text-sm">Find Food</span>
              </Button>
              <Button variant="outline" className="h-20 flex-col" onClick={() => window.location.href = '/reels'}>
                <span className="text-2xl mb-1">📹</span>
                <span className="text-sm">Upload Reel</span>
              </Button>
              <Button variant="outline" className="h-20 flex-col" onClick={() => window.location.href = '/profile'}>
                <span className="text-2xl mb-1">⭐</span>
                <span className="text-sm">Rate Order</span>
              </Button>
              <Button variant="outline" className="h-20 flex-col" onClick={() => window.location.href = '/wallet'}>
                <span className="text-2xl mb-1">🎁</span>
                <span className="text-sm">Redeem Points</span>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default TasksPage;
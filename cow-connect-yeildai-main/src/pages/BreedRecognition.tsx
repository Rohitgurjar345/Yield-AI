import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Upload, Camera, Scan, CheckCircle, AlertCircle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface BreedResult {
  breed: string;
  confidence: number;
  animal: string;
  generalFeatures: {
    origin: string;
    size: string;
    milkYield: string;
    adaptability: string;
    lifespan: string;
  };
  matingRecommendations: {
    recommendedBreed: string;
    reason: string;
    benefits: string[];
    expectedYieldIncrease: string;
  }[];
}

const BreedRecognition = () => {
  const [uploadedImage, setUploadedImage] = useState<string | null>(null);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [result, setResult] = useState<BreedResult | null>(null);
  const { toast } = useToast();

  // Mock breed recognition results
  const mockResults: Record<string, BreedResult> = {
    cattle: {
      breed: "Gir",
      confidence: 94.2,
      animal: "cattle",
      generalFeatures: {
        origin: "Gujarat, India",
        size: "Medium to large (350-400 kg)",
        milkYield: "1,200-1,800 liters per lactation",
        adaptability: "Excellent heat tolerance, disease resistant",
        lifespan: "12-15 years"
      },
      matingRecommendations: [
        {
          recommendedBreed: "Holstein Friesian",
          reason: "Crossbreeding Gir with Holstein Friesian produces high milk yield offspring with better disease resistance",
          benefits: ["Increased milk production (15-20%)", "Better heat tolerance", "Improved disease resistance", "Hybrid vigor"],
          expectedYieldIncrease: "25-30%"
        },
        {
          recommendedBreed: "Jersey",
          reason: "Gir x Jersey cross combines high butterfat content with good milk yield and adaptability",
          benefits: ["Higher butterfat content (4.5-5%)", "Better feed conversion", "Good calving ease", "Moderate milk yield"],
          expectedYieldIncrease: "20-25%"
        },
        {
          recommendedBreed: "Sahiwal",
          reason: "Both are indigenous breeds, creating hardy offspring with good milk production and disease resistance",
          benefits: ["Pure indigenous genetics", "Natural disease immunity", "Heat stress tolerance", "Lower maintenance"],
          expectedYieldIncrease: "15-20%"
        }
      ]
    },
    buffalo: {
      breed: "Murrah",
      confidence: 91.8,
      animal: "buffalo",
      generalFeatures: {
        origin: "Haryana, India",
        size: "Large (450-550 kg)",
        milkYield: "1,800-2,500 liters per lactation",
        adaptability: "Subtropical climate, high humidity tolerance",
        lifespan: "18-20 years"
      },
      matingRecommendations: [
        {
          recommendedBreed: "Nili-Ravi",
          reason: "Cross between Murrah and Nili-Ravi creates superior milk production with excellent butterfat content",
          benefits: ["Higher butterfat content (7-8%)", "Better milk yield", "Strong maternal instincts", "Good adaptability"],
          expectedYieldIncrease: "30-35%"
        },
        {
          recommendedBreed: "Mehsana",
          reason: "Combines Murrah's high yield with Mehsana's longevity and disease resistance",
          benefits: ["Extended lactation period", "Disease resistance", "Good conception rate", "Hardy offspring"],
          expectedYieldIncrease: "25-30%"
        },
        {
          recommendedBreed: "Surti",
          reason: "Creates balanced offspring with good milk quality and moderate yield suitable for small farmers",
          benefits: ["Compact size", "Good milk quality", "Easy management", "Lower feed requirements"],
          expectedYieldIncrease: "20-25%"
        }
      ]
    }
  };

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      if (file.size > 10 * 1024 * 1024) {
        toast({
          title: "File too large",
          description: "Please upload an image smaller than 10MB",
          variant: "destructive",
        });
        return;
      }

      const reader = new FileReader();
      reader.onload = (e) => {
        setUploadedImage(e.target?.result as string);
        setResult(null);
      };
      reader.readAsDataURL(file);
    }
  };

  const analyzeBreed = async () => {
    if (!uploadedImage) return;

    setIsAnalyzing(true);
    
    // Mock AI analysis delay
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    // Simulate random result selection
    const results = Object.values(mockResults);
    const randomResult = results[Math.floor(Math.random() * results.length)];
    
    setResult(randomResult);
    setIsAnalyzing(false);
    
    toast({
      title: "Analysis Complete",
      description: `Breed identified with ${randomResult.confidence}% confidence`,
    });
  };

  return (
    <div className="min-h-screen bg-background py-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-foreground mb-4">
            AI-Powered Breed Recognition
          </h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Upload an image of your livestock to instantly identify the breed with our advanced AI technology. 
            Get detailed information and smart mating recommendations to optimize your breeding program.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Upload Section */}
          <Card className="shadow-medium">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Upload className="w-5 h-5 text-primary" />
                <span>Upload Livestock Image</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div 
                className="border-2 border-dashed border-border rounded-lg p-8 text-center hover:border-primary transition-colors cursor-pointer"
                onClick={() => document.getElementById('file-upload')?.click()}
              >
                {uploadedImage ? (
                  <div className="space-y-4">
                    <img 
                      src={uploadedImage} 
                      alt="Uploaded livestock" 
                      className="max-h-64 mx-auto rounded-lg shadow-soft"
                    />
                    <p className="text-sm text-muted-foreground">
                      Click to upload a different image
                    </p>
                  </div>
                ) : (
                  <div className="space-y-4">
                    <Camera className="w-16 h-16 text-muted-foreground mx-auto" />
                    <div>
                      <p className="text-lg font-medium text-foreground">
                        Drop your image here or click to browse
                      </p>
                      <p className="text-sm text-muted-foreground mt-2">
                        Supports: JPG, PNG, WEBP (Max 10MB)
                      </p>
                    </div>
                  </div>
                )}
              </div>

              <input
                id="file-upload"
                type="file"
                accept="image/*"
                onChange={handleImageUpload}
                className="hidden"
              />

              <Button 
                onClick={analyzeBreed}
                disabled={!uploadedImage || isAnalyzing}
                className="w-full"
                size="lg"
              >
                {isAnalyzing ? (
                  <>
                    <Scan className="w-4 h-4 mr-2 animate-spin" />
                    Analyzing...
                  </>
                ) : (
                  <>
                    <Scan className="w-4 h-4 mr-2" />
                    Identify Breed
                  </>
                )}
              </Button>
            </CardContent>
          </Card>

          {/* Results Section */}
          <Card className="shadow-medium">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <CheckCircle className="w-5 h-5 text-primary" />
                <span>Recognition Results</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              {result ? (
                <div className="space-y-6">
                  {/* Breed Information */}
                  <div className="p-4 bg-gradient-card rounded-lg">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-xl font-semibold text-foreground">
                        {result.breed}
                      </h3>
                      <span className="px-3 py-1 bg-primary text-primary-foreground rounded-full text-sm font-medium">
                        {result.confidence}% confident
                      </span>
                    </div>
                    <p className="text-muted-foreground capitalize">
                      Indian {result.animal} breed
                    </p>
                  </div>

                  {/* General Features */}
                  <div className="border border-accent/20 rounded-lg p-4 bg-accent/5">
                    <h4 className="font-semibold text-foreground mb-3 flex items-center">
                      <CheckCircle className="w-4 h-4 mr-2 text-accent" />
                      General Features
                    </h4>
                    
                    <div className="grid grid-cols-2 gap-3 text-sm">
                      <div>
                        <p className="font-medium text-foreground">Origin:</p>
                        <p className="text-muted-foreground">{result.generalFeatures.origin}</p>
                      </div>
                      <div>
                        <p className="font-medium text-foreground">Size:</p>
                        <p className="text-muted-foreground">{result.generalFeatures.size}</p>
                      </div>
                      <div>
                        <p className="font-medium text-foreground">Milk Yield:</p>
                        <p className="text-muted-foreground">{result.generalFeatures.milkYield}</p>
                      </div>
                      <div>
                        <p className="font-medium text-foreground">Lifespan:</p>
                        <p className="text-muted-foreground">{result.generalFeatures.lifespan}</p>
                      </div>
                      <div className="col-span-2">
                        <p className="font-medium text-foreground">Adaptability:</p>
                        <p className="text-muted-foreground">{result.generalFeatures.adaptability}</p>
                      </div>
                    </div>
                  </div>

                  {/* Mating Recommendations */}
                  <div className="border border-primary/20 rounded-lg p-4 bg-primary/5">
                    <h4 className="font-semibold text-foreground mb-4 flex items-center">
                      <AlertCircle className="w-4 h-4 mr-2 text-primary" />
                      Smart Mating Recommendations
                    </h4>
                    
                    <div className="space-y-4">
                      {result.matingRecommendations.map((recommendation, index) => (
                        <div key={index} className="border border-accent/10 rounded-lg p-3 bg-background/50">
                          <div className="flex items-center justify-between mb-2">
                            <p className="font-medium text-primary">
                              Option {index + 1}: {recommendation.recommendedBreed}
                            </p>
                            <span className="px-2 py-1 bg-primary/10 text-primary rounded text-xs font-medium">
                              +{recommendation.expectedYieldIncrease} yield
                            </span>
                          </div>
                          <p className="text-sm text-muted-foreground mb-3">
                            {recommendation.reason}
                          </p>

                          <div>
                            <p className="font-medium text-foreground mb-2 text-sm">Expected Benefits:</p>
                            <ul className="grid grid-cols-2 gap-1">
                              {recommendation.benefits.map((benefit, benefitIndex) => (
                                <li key={benefitIndex} className="text-xs text-muted-foreground flex items-start">
                                  <CheckCircle className="w-3 h-3 text-primary mr-2 mt-0.5 flex-shrink-0" />
                                  {benefit}
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <Button variant="outline" className="w-full">
                    View Detailed Breed Information
                  </Button>
                </div>
              ) : (
                <div className="text-center py-12">
                  <Scan className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
                  <p className="text-muted-foreground">
                    Upload an image and click "Identify Breed" to see results
                  </p>
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default BreedRecognition;
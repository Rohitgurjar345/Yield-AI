import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Search, MapPin, Thermometer, Droplets, Heart, Zap } from "lucide-react";

interface BreedInfo {
  id: string;
  name: string;
  animal: string;
  origin: string;
  characteristics: string[];
  milkYield: string;
  climate: string;
  care: string[];
  image: string;
}

const mockBreeds: BreedInfo[] = [
  // Cattle Breeds
  {
    id: "1",
    name: "Gir",
    animal: "cattle",
    origin: "Gujarat, India",
    characteristics: ["Medium to large size", "White with reddish-brown patches", "Drooping ears", "Prominent forehead"],
    milkYield: "1,200-1,800 liters per lactation",
    climate: "Hot and humid tropical climate",
    care: ["Regular vaccination", "Adequate shelter", "Balanced nutrition", "Clean water supply"],
    image: "/placeholder.svg"
  },
  {
    id: "2",
    name: "Sahiwal",
    animal: "cattle",
    origin: "Punjab, Pakistan (now in India)",
    characteristics: ["Reddish dun color", "Medium to large frame", "Well-developed udder", "Heat tolerant"],
    milkYield: "2,270-2,500 liters per lactation",
    climate: "Hot and dry climate with good heat tolerance",
    care: ["Heat stress management", "Quality feed", "Regular milking", "Disease prevention"],
    image: "/placeholder.svg"
  },
  {
    id: "3",
    name: "Red Sindhi",
    animal: "cattle",
    origin: "Sindh region (now Pakistan)",
    characteristics: ["Red color", "Compact body", "Good mothering ability", "Tick resistant"],
    milkYield: "1,400-2,000 liters per lactation",
    climate: "Hot and arid climate adaptability",
    care: ["Parasite control", "Mineral supplements", "Shade provision", "Regular health checks"],
    image: "/placeholder.svg"
  },
  {
    id: "4",
    name: "Tharparkar",
    animal: "cattle",
    origin: "Thar Desert, Rajasthan",
    characteristics: ["White or light grey", "Medium size", "Drought tolerant", "Dual purpose"],
    milkYield: "1,800-2,200 liters per lactation",
    climate: "Arid and semi-arid regions",
    care: ["Water conservation", "Desert grazing", "Salt tolerance", "Heat management"],
    image: "/placeholder.svg"
  },
  {
    id: "5",
    name: "Hariana",
    animal: "cattle",
    origin: "Haryana, India",
    characteristics: ["Greyish white", "Strong and compact", "Good draught capacity", "Hardy breed"],
    milkYield: "1,000-1,500 liters per lactation",
    climate: "Semi-arid climate with temperature extremes",
    care: ["Work management", "Nutritional balance", "Hoof care", "Regular rest"],
    image: "/placeholder.svg"
  },
  {
    id: "6",
    name: "Kankrej",
    animal: "cattle",
    origin: "Gujarat-Rajasthan border",
    characteristics: ["Silver grey", "Large size", "Lyre-shaped horns", "Good stamina"],
    milkYield: "1,200-1,800 liters per lactation",
    climate: "Hot and dry climate tolerance",
    care: ["Extensive grazing", "Heat shelter", "Quality water", "Disease monitoring"],
    image: "/placeholder.svg"
  },
  // Buffalo Breeds
  {
    id: "7",
    name: "Murrah",
    animal: "buffalo",
    origin: "Haryana, India",
    characteristics: ["Large body size", "Black coat", "Curved horns", "High milk production"],
    milkYield: "1,800-2,500 liters per lactation",
    climate: "Subtropical climate with high humidity",
    care: ["Wallowing facilities", "High protein feed", "Regular health check-ups", "Proper ventilation"],
    image: "/placeholder.svg"
  },
  {
    id: "8",
    name: "Nili-Ravi",
    animal: "buffalo",
    origin: "Punjab region",
    characteristics: ["Large size", "Black with white markings", "Wall eyes", "Excellent milk producer"],
    milkYield: "2,000-3,000 liters per lactation",
    climate: "Riverine areas with high humidity",
    care: ["Water bodies access", "Rich feeding", "Breeding management", "Heat stress relief"],
    image: "/placeholder.svg"
  },
  {
    id: "9",
    name: "Mehsana",
    animal: "buffalo",
    origin: "Gujarat, India",
    characteristics: ["Medium to large", "Black color", "Medium horns", "Good longevity"],
    milkYield: "1,500-2,200 liters per lactation",
    climate: "Semi-arid to humid subtropical",
    care: ["Balanced nutrition", "Regular breeding", "Disease prevention", "Water management"],
    image: "/placeholder.svg"
  },
  {
    id: "10",
    name: "Surti",
    animal: "buffalo",
    origin: "Gujarat, India",
    characteristics: ["Compact size", "Black coat", "Short legs", "High butterfat milk"],
    milkYield: "1,200-1,800 liters per lactation",
    climate: "Coastal and riverine climate",
    care: ["Quality fodder", "Clean environment", "Regular milking", "Health monitoring"],
    image: "/placeholder.svg"
  },
  {
    id: "11",
    name: "Jaffarabadi",
    animal: "buffalo",
    origin: "Gujarat, India",
    characteristics: ["Very large size", "Black color", "Massive build", "Heavy milk producer"],
    milkYield: "2,500-3,500 liters per lactation",
    climate: "Coastal humid climate",
    care: ["High-quality feed", "Spacious housing", "Regular exercise", "Professional management"],
    image: "/placeholder.svg"
  },
  {
    id: "12",
    name: "Bhadawari",
    animal: "buffalo",
    origin: "Uttar Pradesh, Madhya Pradesh",
    characteristics: ["Small to medium", "Light copper color", "Compact udder", "Hardy breed"],
    milkYield: "900-1,400 liters per lactation",
    climate: "Sub-tropical climate with seasonal variations",
    care: ["Local feed utilization", "Simple housing", "Basic healthcare", "Traditional management"],
    image: "/placeholder.svg"
  }
];

const BreedInformation = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedAnimal, setSelectedAnimal] = useState("all");

  const filteredBreeds = mockBreeds.filter(breed => {
    const matchesSearch = breed.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         breed.animal.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesAnimal = selectedAnimal === "all" || breed.animal === selectedAnimal;
    return matchesSearch && matchesAnimal;
  });

  const animalTypes = ["all", "cattle", "buffalo"];

  return (
    <div className="min-h-screen bg-background py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-foreground mb-4">
            Indian Livestock Breeds Database
          </h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Comprehensive information about Indian livestock breeds including characteristics, 
            care practices, and breeding recommendations for optimal yield.
          </p>
        </div>

        {/* Search and Filter */}
        <div className="mb-8 space-y-4 lg:space-y-0 lg:flex lg:items-center lg:space-x-4">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
            <Input
              placeholder="Search breeds by name or animal type..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10"
            />
          </div>
          
          <div className="flex space-x-2 overflow-x-auto pb-2">
            {animalTypes.map((type) => (
              <Button
                key={type}
                variant={selectedAnimal === type ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedAnimal(type)}
                className="whitespace-nowrap"
              >
                {type === "all" ? "All Animals" : type.charAt(0).toUpperCase() + type.slice(1)}
              </Button>
            ))}
          </div>
        </div>

        {/* Breed Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredBreeds.map((breed) => (
            <Card key={breed.id} className="shadow-medium hover:shadow-strong transition-shadow">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="text-xl">{breed.name}</CardTitle>
                  <Badge variant="secondary" className="capitalize">
                    {breed.animal}
                  </Badge>
                </div>
                <div className="flex items-center text-sm text-muted-foreground">
                  <MapPin className="w-4 h-4 mr-1" />
                  {breed.origin}
                </div>
              </CardHeader>
              
              <CardContent className="space-y-4">
                {/* Milk Yield */}
                <div className="flex items-center space-x-2 p-3 bg-gradient-card rounded-lg">
                  <Droplets className="w-5 h-5 text-primary" />
                  <div>
                    <p className="font-medium text-sm">Milk Production</p>
                    <p className="text-sm text-muted-foreground">{breed.milkYield}</p>
                  </div>
                </div>

                {/* Climate */}
                <div className="flex items-center space-x-2 p-3 bg-accent/10 rounded-lg">
                  <Thermometer className="w-5 h-5 text-accent" />
                  <div>
                    <p className="font-medium text-sm">Climate Adaptability</p>
                    <p className="text-sm text-muted-foreground">{breed.climate}</p>
                  </div>
                </div>

                {/* Characteristics */}
                <div>
                  <h4 className="font-medium text-sm mb-2 flex items-center">
                    <Zap className="w-4 h-4 mr-1 text-primary" />
                    Key Characteristics
                  </h4>
                  <ul className="space-y-1">
                    {breed.characteristics.map((char, index) => (
                      <li key={index} className="text-xs text-muted-foreground flex items-start">
                        <span className="w-1 h-1 bg-primary rounded-full mt-1.5 mr-2 flex-shrink-0"></span>
                        {char}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Care Tips */}
                <div>
                  <h4 className="font-medium text-sm mb-2 flex items-center">
                    <Heart className="w-4 h-4 mr-1 text-destructive" />
                    Care Practices
                  </h4>
                  <ul className="space-y-1">
                    {breed.care.map((tip, index) => (
                      <li key={index} className="text-xs text-muted-foreground flex items-start">
                        <span className="w-1 h-1 bg-destructive rounded-full mt-1.5 mr-2 flex-shrink-0"></span>
                        {tip}
                      </li>
                    ))}
                  </ul>
                </div>

                <Button variant="outline" size="sm" className="w-full">
                  View Detailed Information
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {filteredBreeds.length === 0 && (
          <div className="text-center py-12">
            <Search className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
            <h3 className="text-lg font-medium text-foreground mb-2">No breeds found</h3>
            <p className="text-muted-foreground">
              Try adjusting your search terms or filters
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default BreedInformation;
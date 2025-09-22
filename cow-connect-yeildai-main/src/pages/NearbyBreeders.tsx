import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { MapPin, Phone, Star, Navigation, Filter } from "lucide-react";

interface Breeder {
  id: string;
  name: string;
  location: string;
  distance: string;
  specialties: string[];
  rating: number;
  phone: string;
  verified: boolean;
}

const mockBreeders: Breeder[] = [
  {
    id: "1",
    name: "Ramesh Dairy Farm",
    location: "Anand, Gujarat",
    distance: "2.5 km",
    specialties: ["Gir Cattle", "Holstein Friesian"],
    rating: 4.8,
    phone: "+91 98765 43210",
    verified: true
  },
  {
    id: "2", 
    name: "Krishna Buffalo Ranch",
    location: "Hisar, Haryana",
    distance: "5.2 km",
    specialties: ["Murrah Buffalo", "Nili-Ravi Buffalo"],
    rating: 4.6,
    phone: "+91 98765 43211",
    verified: true
  },
  {
    id: "3",
    name: "Gopal Goat Farm",
    location: "Mathura, Uttar Pradesh", 
    distance: "8.1 km",
    specialties: ["Jamunapari Goat", "Barbari Goat"],
    rating: 4.3,
    phone: "+91 98765 43212",
    verified: false
  },
  {
    id: "4",
    name: "Shiva Sheep Station",
    location: "Bikaner, Rajasthan",
    distance: "12.7 km",
    specialties: ["Marwari Sheep", "Chokla Sheep"],
    rating: 4.5,
    phone: "+91 98765 43213",
    verified: true
  }
];

const NearbyBreeders = () => {
  const [searchLocation, setSearchLocation] = useState("");
  const [selectedSpecialty, setSelectedSpecialty] = useState("all");

  const specialties = ["all", "cattle", "buffalo", "goat", "sheep", "horse"];

  const filteredBreeders = mockBreeders.filter(breeder => {
    const matchesLocation = breeder.location.toLowerCase().includes(searchLocation.toLowerCase());
    const matchesSpecialty = selectedSpecialty === "all" || 
      breeder.specialties.some(s => s.toLowerCase().includes(selectedSpecialty));
    return matchesLocation && matchesSpecialty;
  });

  return (
    <div className="min-h-screen bg-background py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-foreground mb-4">
            Find Nearby Breeders
          </h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Connect with verified livestock breeders in your area. Find quality breeding stock 
            and expert guidance for your livestock farming needs.
          </p>
        </div>

        {/* Map Placeholder */}
        <Card className="mb-8 shadow-medium">
          <CardContent className="p-0">
            <div className="h-64 bg-gradient-to-br from-primary/10 to-accent/10 rounded-lg flex items-center justify-center relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-hero opacity-20"></div>
              <div className="text-center z-10">
                <MapPin className="w-12 h-12 text-primary mx-auto mb-2" />
                <p className="text-foreground font-medium">Interactive Map</p>
                <p className="text-sm text-muted-foreground">
                  Google Maps integration showing breeder locations
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Search and Filter */}
        <div className="mb-8 space-y-4 lg:space-y-0 lg:flex lg:items-center lg:space-x-4">
          <div className="relative flex-1">
            <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
            <Input
              placeholder="Search by location (city, state)..."
              value={searchLocation}
              onChange={(e) => setSearchLocation(e.target.value)}
              className="pl-10"
            />
          </div>
          
          <div className="flex items-center space-x-2">
            <Filter className="w-4 h-4 text-muted-foreground" />
            <div className="flex space-x-2 overflow-x-auto pb-2">
              {specialties.map((specialty) => (
                <Button
                  key={specialty}
                  variant={selectedSpecialty === specialty ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSelectedSpecialty(specialty)}
                  className="whitespace-nowrap"
                >
                  {specialty === "all" ? "All Types" : specialty.charAt(0).toUpperCase() + specialty.slice(1)}
                </Button>
              ))}
            </div>
          </div>
        </div>

        {/* Breeder Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredBreeders.map((breeder) => (
            <Card key={breeder.id} className="shadow-medium hover:shadow-strong transition-shadow">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div>
                    <CardTitle className="text-lg flex items-center space-x-2">
                      <span>{breeder.name}</span>
                      {breeder.verified && (
                        <Badge variant="default" className="text-xs">
                          Verified
                        </Badge>
                      )}
                    </CardTitle>
                    <div className="flex items-center text-sm text-muted-foreground mt-1">
                      <MapPin className="w-4 h-4 mr-1" />
                      {breeder.location}
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="flex items-center text-sm font-medium">
                      <Star className="w-4 h-4 text-yellow-500 mr-1" />
                      {breeder.rating}
                    </div>
                    <p className="text-xs text-muted-foreground mt-1">
                      {breeder.distance} away
                    </p>
                  </div>
                </div>
              </CardHeader>
              
              <CardContent className="space-y-4">
                {/* Specialties */}
                <div>
                  <h4 className="font-medium text-sm mb-2">Specialties</h4>
                  <div className="flex flex-wrap gap-2">
                    {breeder.specialties.map((specialty, index) => (
                      <Badge key={index} variant="secondary" className="text-xs">
                        {specialty}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Contact */}
                <div className="pt-2 border-t border-border">
                  <div className="flex items-center text-sm text-muted-foreground mb-3">
                    <Phone className="w-4 h-4 mr-2" />
                    {breeder.phone}
                  </div>
                  
                  <div className="flex space-x-2">
                    <Button size="sm" variant="outline" className="flex-1">
                      <Phone className="w-4 h-4 mr-2" />
                      Call
                    </Button>
                    <Button size="sm" className="flex-1">
                      <Navigation className="w-4 h-4 mr-2" />
                      Directions
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {filteredBreeders.length === 0 && (
          <div className="text-center py-12">
            <MapPin className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
            <h3 className="text-lg font-medium text-foreground mb-2">No breeders found</h3>
            <p className="text-muted-foreground">
              Try adjusting your search location or filters
            </p>
          </div>
        )}

        {/* Current Location Button */}
        <div className="mt-8 text-center">
          <Button variant="outline" size="lg">
            <Navigation className="w-4 h-4 mr-2" />
            Use Current Location
          </Button>
        </div>
      </div>
    </div>
  );
};

export default NearbyBreeders;

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { useState } from "react";
import { Link } from "react-router-dom";

export function RegisterForm() {
  const [role, setRole] = useState<"guide" | "agency">("guide");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      // Here would be the redirect after successful registration
      console.log("User registered as", role);
    }, 1500);
  };

  return (
    <Card className="w-full max-w-md mx-auto">
      <CardHeader>
        <CardTitle className="text-2xl text-center">Crear una cuenta</CardTitle>
        <CardDescription className="text-center">
          Únete a TourMate Connect y empieza a conectar con {role === "guide" ? "agencias" : "guías"}.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-4">
            <RadioGroup 
              defaultValue={role} 
              className="grid grid-cols-2 gap-4"
              onValueChange={(value) => setRole(value as "guide" | "agency")}
            >
              <div>
                <RadioGroupItem 
                  value="guide" 
                  id="guide" 
                  className="peer sr-only" 
                />
                <Label 
                  htmlFor="guide"
                  className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-tour-blue peer-data-[state=checked]:bg-tour-gray-light [&:has([data-state=checked])]:border-tour-blue"
                >
                  <div className="mb-1">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-tour-blue"><circle cx="12" cy="8" r="5"></circle><path d="M20 21a8 8 0 1 0-16 0"></path></svg>
                  </div>
                  <div className="text-sm font-medium">Guía turístico</div>
                </Label>
              </div>
              <div>
                <RadioGroupItem 
                  value="agency" 
                  id="agency" 
                  className="peer sr-only" 
                />
                <Label 
                  htmlFor="agency"
                  className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-tour-blue peer-data-[state=checked]:bg-tour-gray-light [&:has([data-state=checked])]:border-tour-blue"
                >
                  <div className="mb-1">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-tour-blue"><rect x="4" y="5" width="16" height="16" rx="2"></rect><path d="m16 2-4 4-4-4"></path><path d="M9 14h6"></path><path d="M12 11v6"></path></svg>
                  </div>
                  <div className="text-sm font-medium">Agencia de viajes</div>
                </Label>
              </div>
            </RadioGroup>

            <div className="space-y-2">
              <Label htmlFor="name">Nombre completo</Label>
              <Input id="name" placeholder="Ingresa tu nombre completo" required />
            </div>

            {role === "agency" && (
              <div className="space-y-2">
                <Label htmlFor="company">Nombre de la agencia</Label>
                <Input id="company" placeholder="Nombre de tu agencia" required />
              </div>
            )}

            <div className="space-y-2">
              <Label htmlFor="email">Correo electrónico</Label>
              <Input id="email" type="email" placeholder="correo@ejemplo.com" required />
            </div>

            <div className="space-y-2">
              <Label htmlFor="password">Contraseña</Label>
              <Input id="password" type="password" placeholder="••••••••" required />
              <p className="text-xs text-muted-foreground">
                Al menos 8 caracteres con letras y números
              </p>
            </div>

            <div className="space-y-2">
              <Label htmlFor="confirm-password">Confirmar contraseña</Label>
              <Input id="confirm-password" type="password" placeholder="••••••••" required />
            </div>
          </div>

          <Button type="submit" className="w-full bg-tour-blue hover:bg-tour-blue-dark" disabled={isLoading}>
            {isLoading ? "Creando cuenta..." : "Crear cuenta"}
          </Button>
        </form>
      </CardContent>
      <CardFooter className="flex justify-center">
        <p className="text-sm text-muted-foreground">
          ¿Ya tienes una cuenta?{" "}
          <Link to="/login" className="text-tour-blue hover:underline">
            Iniciar sesión
          </Link>
        </p>
      </CardFooter>
    </Card>
  );
}

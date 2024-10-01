import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { CalendarDays, Mail, MapPin, Phone } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function Component() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-14 items-center">
          <div className="mr-4 hidden md:flex">
            <Link className="mr-6 flex items-center space-x-2" href="/">
              <span className="hidden font-bold sm:inline-block">Sonido Profesional</span>
            </Link>
            <nav className="flex items-center space-x-6 text-sm font-medium">
              <Link className="transition-colors hover:text-foreground/80 text-foreground/60" href="#servicios">
                Servicios
              </Link>
              <Link className="transition-colors hover:text-foreground/80 text-foreground/60" href="#galeria">
                Galería
              </Link>
              <Link className="transition-colors hover:text-foreground/80 text-foreground/60" href="#paquetes">
                Paquetes
              </Link>
              <Link className="transition-colors hover:text-foreground/80 text-foreground/60" href="#contacto">
                Contacto
              </Link>
            </nav>
          </div>
        </div>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                  Sonido Profesional para Eventos Inolvidables
                </h1>
                <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                  Ofrecemos equipos de sonido de alta calidad para todo tipo de eventos. Experiencia, profesionalismo y
                  tecnología de punta a su servicio.
                </p>
              </div>
              <div className="space-x-4">
                <Button>Solicitar Cotización</Button>
                <Button variant="outline">Ver Paquetes</Button>
              </div>
            </div>
          </div>
        </section>
        <section id="servicios" className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-8 text-center">
              Nuestros Servicios
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle>Sonido para Bodas</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>Sistemas de sonido profesionales para que cada momento de su boda sea perfecto.</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Eventos Corporativos</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>Equipos de última generación para conferencias, presentaciones y eventos empresariales.</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Fiestas y Celebraciones</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>Sistemas de audio potentes y claros para fiestas inolvidables.</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        <section id="galeria" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-8 text-center">
              Galería de Eventos
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              <Image
                alt="Evento 1"
                className="aspect-video overflow-hidden rounded-lg object-cover"
                height="300"
                src="/placeholder.svg"
                width="400"
              />
              <Image
                alt="Evento 2"
                className="aspect-video overflow-hidden rounded-lg object-cover"
                height="300"
                src="/placeholder.svg"
                width="400"
              />
              <Image
                alt="Evento 3"
                className="aspect-video overflow-hidden rounded-lg object-cover"
                height="300"
                src="/placeholder.svg"
                width="400"
              />
              <Image
                alt="Evento 4"
                className="aspect-video overflow-hidden rounded-lg object-cover"
                height="300"
                src="/placeholder.svg"
                width="400"
              />
              <Image
                alt="Evento 5"
                className="aspect-video overflow-hidden rounded-lg object-cover"
                height="300"
                src="/placeholder.svg"
                width="400"
              />
              <Image
                alt="Evento 6"
                className="aspect-video overflow-hidden rounded-lg object-cover"
                height="300"
                src="/placeholder.svg"
                width="400"
              />
            </div>
          </div>
        </section>
        <section id="paquetes" className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-8 text-center">
              Nuestros Paquetes
            </h2>
            <Tabs defaultValue="basico" className="w-full max-w-3xl mx-auto">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="basico">Básico</TabsTrigger>
                <TabsTrigger value="estandar">Estándar</TabsTrigger>
                <TabsTrigger value="premium">Premium</TabsTrigger>
              </TabsList>
              <TabsContent value="basico">
                <Card>
                  <CardHeader>
                    <CardTitle>Paquete Básico</CardTitle>
                    <CardDescription>Ideal para eventos pequeños</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-2">
                    <p>• 2 bocinas activas de 15"</p>
                    <p>• 1 micrófono inalámbrico</p>
                    <p>• Mezcladora de 4 canales</p>
                    <p>• Iluminación básica LED</p>
                  </CardContent>
                  <CardFooter>
                    <Button className="w-full">Reservar - $5,000</Button>
                  </CardFooter>
                </Card>
              </TabsContent>
              <TabsContent value="estandar">
                <Card>
                  <CardHeader>
                    <CardTitle>Paquete Estándar</CardTitle>
                    <CardDescription>Perfecto para eventos medianos</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-2">
                    <p>• 4 bocinas activas de 15"</p>
                    <p>• 2 subwoofers</p>
                    <p>• 2 micrófonos inalámbricos</p>
                    <p>• Mezcladora digital de 16 canales</p>
                    <p>• Iluminación profesional con control DMX</p>
                  </CardContent>
                  <CardFooter>
                    <Button className="w-full">Reservar - $10,000</Button>
                  </CardFooter>
                </Card>
              </TabsContent>
              <TabsContent value="premium">
                <Card>
                  <CardHeader>
                    <CardTitle>Paquete Premium</CardTitle>
                    <CardDescription>La mejor opción para grandes eventos</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-2">
                    <p>• Sistema line array de 8 cajas</p>
                    <p>• 4 subwoofers de alta potencia</p>
                    <p>• 4 micrófonos inalámbricos profesionales</p>
                    <p>• Mezcladora digital de 32 canales</p>
                    <p>• Sistema de iluminación completo con luces móviles</p>
                    <p>• Técnico de sonido dedicado</p>
                  </CardContent>
                  <CardFooter>
                    <Button className="w-full">Reservar - $20,000</Button>
                  </CardFooter>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </section>
        <section id="contacto" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-8 text-center">Contáctanos</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle>Información de Contacto</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center space-x-4">
                    <Phone className="h-5 w-5" />
                    <span>(123) 456-7890</span>
                  </div>
                  <div className="flex items-center space-x-4">
                    <Mail className="h-5 w-5" />
                    <span>info@sonidoprofesional.com</span>
                  </div>
                  <div className="flex items-center space-x-4">
                    <MapPin className="h-5 w-5" />
                    <span>Calle Principal 123, Ciudad, Estado, CP 12345</span>
                  </div>
                  <div className="flex items-center space-x-4">
                    <CalendarDays className="h-5 w-5" />
                    <span>Lunes a Viernes: 9:00 AM - 6:00 PM</span>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Envíanos un Mensaje</CardTitle>
                </CardHeader>
                <CardContent>
                  <form className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Nombre</Label>
                      <Input id="name" placeholder="Tu nombre" required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Correo Electrónico</Label>
                      <Input id="email" placeholder="tu@email.com" required type="email" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="message">Mensaje</Label>
                      <textarea
                        className="min-h-[100px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                        id="message"
                        placeholder="Tu mensaje"
                        required
                      />
                    </div>
                    <Button className="w-full" type="submit">
                      Enviar Mensaje
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>
      <footer className="w-full py-6 bg-gray-100 dark:bg-gray-800">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <div className="flex flex-col items-center gap-4 px-8 md:flex-row md:gap-2 md:px-0">
              <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
                © 2024 Sonido Profesional. Todos los derechos reservados.
              </p>
            </div>
            <div className="flex gap-4">
              <Link className="text-sm font-medium hover:underline underline-offset-4" href="#">
                Términos de Servicio
              </Link>
              <Link className="text-sm font-medium hover:underline underline-offset-4" href="#">
                Política de Privacidad
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

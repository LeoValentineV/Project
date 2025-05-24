import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { BookOpen, FileText, CheckCircle } from "lucide-react"

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold tracking-tight mb-4">Изучаем сложные предложения</h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Интерактивное приложение для изучения БСП, СПП и ССП в русском языке
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        <Card className="flex flex-col">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <BookOpen className="h-5 w-5" />
              <span>БСП</span>
            </CardTitle>
            <CardDescription>Бессоюзное сложное предложение</CardDescription>
          </CardHeader>
          <CardContent className="flex-grow">
            <p>Предложения, части которых соединяются без союзов, только интонацией.</p>
            <div className="mt-4 p-3 bg-muted rounded-md">
              <p className="italic">Пример: Солнце село — стало холодно.</p>
            </div>
          </CardContent>
          <CardFooter>
            <Link href="/bsp" className="w-full">
              <Button className="w-full">Изучить БСП</Button>
            </Link>
          </CardFooter>
        </Card>

        <Card className="flex flex-col">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <FileText className="h-5 w-5" />
              <span>СПП</span>
            </CardTitle>
            <CardDescription>Сложноподчиненное предложение</CardDescription>
          </CardHeader>
          <CardContent className="flex-grow">
            <p>Предложения, в которых одна часть подчиняется другой при помощи подчинительных союзов.</p>
            <div className="mt-4 p-3 bg-muted rounded-md">
              <p className="italic">Пример: Я знаю, что он придет.</p>
            </div>
          </CardContent>
          <CardFooter>
            <Link href="/spp" className="w-full">
              <Button className="w-full">Изучить СПП</Button>
            </Link>
          </CardFooter>
        </Card>

        <Card className="flex flex-col">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <CheckCircle className="h-5 w-5" />
              <span>ССП</span>
            </CardTitle>
            <CardDescription>Сложносочиненное предложение</CardDescription>
          </CardHeader>
          <CardContent className="flex-grow">
            <p>Предложения, части которых равноправны и соединяются сочинительными союзами.</p>
            <div className="mt-4 p-3 bg-muted rounded-md">
              <p className="italic">Пример: Солнце светило, и птицы пели.</p>
            </div>
          </CardContent>
          <CardFooter>
            <Link href="/ssp" className="w-full">
              <Button className="w-full">Изучить ССП</Button>
            </Link>
          </CardFooter>
        </Card>
      </div>

      <div className="text-center">
        <Link href="/quiz">
          <Button size="lg" className="bg-green-600 hover:bg-green-700">
            Пройти тест
          </Button>
        </Link>
      </div>
    </div>
  )
}

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ArrowLeft } from "lucide-react"

export default function SPPPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <Link href="/" className="flex items-center gap-2 mb-6 text-muted-foreground hover:text-foreground">
        <ArrowLeft className="h-4 w-4" />
        <span>На главную</span>
      </Link>

      <h1 className="text-3xl font-bold mb-6">Сложноподчиненное предложение (СПП)</h1>

      <div className="mb-8">
        <p className="text-lg mb-4">
          Сложноподчиненное предложение — это сложное предложение, в котором одна часть подчиняется другой и
          присоединяется к ней при помощи подчинительных союзов или союзных слов.
        </p>
      </div>

      <Tabs defaultValue="rules" className="mb-8">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="rules">Правила</TabsTrigger>
          <TabsTrigger value="examples">Примеры</TabsTrigger>
          <TabsTrigger value="practice">Упражнения</TabsTrigger>
        </TabsList>
        <TabsContent value="rules" className="p-4 border rounded-md mt-2">
          <h2 className="text-xl font-semibold mb-4">Структура СПП</h2>

          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-medium mb-2">Главная и придаточная части:</h3>
              <p>
                В СПП выделяют главную и придаточную части. Главная часть грамматически независима, а придаточная
                зависит от главной или другой придаточной части.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-medium mb-2">Средства связи в СПП:</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  <strong>Подчинительные союзы:</strong> что, чтобы, если, потому что, так как, как будто и др.
                </li>
                <li>
                  <strong>Союзные слова:</strong> который, какой, чей, где, куда, откуда, когда, как и др.
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-medium mb-2">Виды придаточных предложений:</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  <strong>Определительные:</strong> отвечают на вопросы какой? который? чей?
                </li>
                <li>
                  <strong>Изъяснительные:</strong> отвечают на вопросы косвенных падежей (что? о чем? и т.д.)
                </li>
                <li>
                  <strong>Обстоятельственные:</strong> отвечают на вопросы где? куда? когда? почему? зачем? и т.д.
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-medium mb-2">Знаки препинания в СПП:</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Придаточная часть отделяется от главной запятой</li>
                <li>Если придаточная часть стоит внутри главной, то она выделяется запятыми с обеих сторон</li>
                <li>
                  Составные подчинительные союзы (потому что, оттого что, для того чтобы и др.) могут расчленяться
                </li>
              </ul>
            </div>
          </div>
        </TabsContent>

        <TabsContent value="examples" className="p-4 border rounded-md mt-2">
          <h2 className="text-xl font-semibold mb-4">Примеры СПП</h2>

          <div className="space-y-6">
            <Card>
              <CardContent className="p-4">
                <h3 className="font-medium mb-2">Определительные придаточные:</h3>
                <ul className="space-y-3">
                  <li>
                    <p className="italic">
                      Книга, <span className="underline">которую</span> я прочитал, оказалась интересной.
                    </p>
                    <p className="text-sm text-muted-foreground mt-1">
                      (придаточное определительное с союзным словом "которую")
                    </p>
                  </li>
                  <li>
                    <p className="italic">
                      Я вспомнил дом, <span className="underline">где</span> прошло мое детство.
                    </p>
                    <p className="text-sm text-muted-foreground mt-1">
                      (придаточное определительное с союзным словом "где")
                    </p>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-4">
                <h3 className="font-medium mb-2">Изъяснительные придаточные:</h3>
                <ul className="space-y-3">
                  <li>
                    <p className="italic">
                      Я знаю, <span className="underline">что</span> он скоро вернется.
                    </p>
                    <p className="text-sm text-muted-foreground mt-1">(придаточное изъяснительное с союзом "что")</p>
                  </li>
                  <li>
                    <p className="italic">
                      Скажи мне, <span className="underline">кто</span> твой друг.
                    </p>
                    <p className="text-sm text-muted-foreground mt-1">
                      (придаточное изъяснительное с союзным словом "кто")
                    </p>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-4">
                <h3 className="font-medium mb-2">Обстоятельственные придаточные:</h3>
                <ul className="space-y-3">
                  <li>
                    <p className="italic">
                      <span className="underline">Когда</span> наступила весна, птицы вернулись из теплых краев.
                    </p>
                    <p className="text-sm text-muted-foreground mt-1">(придаточное времени с союзным словом "когда")</p>
                  </li>
                  <li>
                    <p className="italic">
                      Я не пошел гулять, <span className="underline">потому что</span> шел дождь.
                    </p>
                    <p className="text-sm text-muted-foreground mt-1">(придаточное причины с союзом "потому что")</p>
                  </li>
                  <li>
                    <p className="italic">
                      Он говорил так тихо, <span className="underline">что</span> его никто не слышал.
                    </p>
                    <p className="text-sm text-muted-foreground mt-1">(придаточное следствия с союзом "что")</p>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="practice" className="p-4 border rounded-md mt-2">
          <h2 className="text-xl font-semibold mb-4">Упражнения</h2>

          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-medium mb-3">Определите вид придаточного предложения:</h3>

              <div className="space-y-4">
                <div className="p-3 bg-muted rounded-md">
                  <p>
                    Я знаю, <span className="font-bold">что ты сказал правду</span>.
                  </p>
                  <p className="mt-2 text-sm text-muted-foreground">
                    Подсказка: на какой вопрос отвечает придаточная часть?
                  </p>
                </div>

                <div className="p-3 bg-muted rounded-md">
                  <p>
                    Дом, <span className="font-bold">в котором я родился</span>, находится на окраине города.
                  </p>
                  <p className="mt-2 text-sm text-muted-foreground">
                    Подсказка: какое слово поясняет придаточная часть?
                  </p>
                </div>

                <div className="p-3 bg-muted rounded-md">
                  <p>
                    <span className="font-bold">Если пойдет дождь</span>, мы останемся дома.
                  </p>
                  <p className="mt-2 text-sm text-muted-foreground">
                    Подсказка: какие отношения выражает придаточная часть?
                  </p>
                </div>
              </div>

              <div className="mt-4">
                <Button variant="outline">Проверить ответы</Button>
              </div>
            </div>
          </div>
        </TabsContent>
      </Tabs>

      <div className="flex justify-between mt-12">
        <Link href="/">
          <Button variant="outline">На главную</Button>
        </Link>
        <Link href="/quiz">
          <Button>Пройти тест</Button>
        </Link>
      </div>
    </div>
  )
}

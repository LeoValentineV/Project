import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ArrowLeft } from "lucide-react"

export default function SSPPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <Link href="/" className="flex items-center gap-2 mb-6 text-muted-foreground hover:text-foreground">
        <ArrowLeft className="h-4 w-4" />
        <span>На главную</span>
      </Link>

      <h1 className="text-3xl font-bold mb-6">Сложносочиненное предложение (ССП)</h1>

      <div className="mb-8">
        <p className="text-lg mb-4">
          Сложносочиненное предложение — это сложное предложение, части которого равноправны по смыслу и соединяются
          сочинительными союзами.
        </p>
      </div>

      <Tabs defaultValue="rules" className="mb-8">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="rules">Правила</TabsTrigger>
          <TabsTrigger value="examples">Примеры</TabsTrigger>
          <TabsTrigger value="practice">Упражнения</TabsTrigger>
        </TabsList>
        <TabsContent value="rules" className="p-4 border rounded-md mt-2">
          <h2 className="text-xl font-semibold mb-4">Структура ССП</h2>

          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-medium mb-2">Средства связи в ССП:</h3>
              <p>Части ССП соединяются сочинительными союзами, которые делятся на три группы:</p>
              <ul className="list-disc pl-6 space-y-2 mt-2">
                <li>
                  <strong>Соединительные:</strong> и, да (=и), ни...ни, тоже, также
                </li>
                <li>
                  <strong>Противительные:</strong> а, но, да (=но), однако, зато
                </li>
                <li>
                  <strong>Разделительные:</strong> или, либо, то...то, не то...не то
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-medium mb-2">Смысловые отношения в ССП:</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  <strong>Соединительные отношения:</strong> одновременность, последовательность действий
                </li>
                <li>
                  <strong>Противительные отношения:</strong> противопоставление, сопоставление
                </li>
                <li>
                  <strong>Разделительные отношения:</strong> чередование, взаимоисключение
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-medium mb-2">Знаки препинания в ССП:</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Части ССП разделяются запятой</li>
                <li>
                  Запятая не ставится, если части имеют общий второстепенный член или общее придаточное предложение
                </li>
                <li>
                  Запятая не ставится, если обе части — вопросительные, побудительные или восклицательные предложения
                </li>
              </ul>
            </div>
          </div>
        </TabsContent>

        <TabsContent value="examples" className="p-4 border rounded-md mt-2">
          <h2 className="text-xl font-semibold mb-4">Примеры ССП</h2>

          <div className="space-y-6">
            <Card>
              <CardContent className="p-4">
                <h3 className="font-medium mb-2">С соединительными союзами:</h3>
                <ul className="space-y-3">
                  <li>
                    <p className="italic">
                      Солнце светило ярко, <span className="underline">и</span> птицы пели в саду.
                    </p>
                    <p className="text-sm text-muted-foreground mt-1">(одновременность действий)</p>
                  </li>
                  <li>
                    <p className="italic">
                      Прозвенел звонок, <span className="underline">и</span> ученики вошли в класс.
                    </p>
                    <p className="text-sm text-muted-foreground mt-1">(последовательность действий)</p>
                  </li>
                  <li>
                    <p className="italic">
                      <span className="underline">Ни</span> ветер не шумел, <span className="underline">ни</span> птицы
                      не пели.
                    </p>
                    <p className="text-sm text-muted-foreground mt-1">(отрицание одновременности)</p>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-4">
                <h3 className="font-medium mb-2">С противительными союзами:</h3>
                <ul className="space-y-3">
                  <li>
                    <p className="italic">
                      Было уже поздно, <span className="underline">но</span> никто не хотел уходить.
                    </p>
                    <p className="text-sm text-muted-foreground mt-1">(противопоставление)</p>
                  </li>
                  <li>
                    <p className="italic">
                      Дождь прошел, <span className="underline">однако</span> небо оставалось хмурым.
                    </p>
                    <p className="text-sm text-muted-foreground mt-1">(уступительное значение)</p>
                  </li>
                  <li>
                    <p className="italic">
                      Задача трудная, <span className="underline">зато</span> интересная.
                    </p>
                    <p className="text-sm text-muted-foreground mt-1">(возмещение)</p>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-4">
                <h3 className="font-medium mb-2">С разделительными союзами:</h3>
                <ul className="space-y-3">
                  <li>
                    <p className="italic">
                      <span className="underline">То</span> светило солнце, <span className="underline">то</span>{" "}
                      набегали тучи.
                    </p>
                    <p className="text-sm text-muted-foreground mt-1">(чередование явлений)</p>
                  </li>
                  <li>
                    <p className="italic">
                      Мы поедем в горы <span className="underline">или</span> отправимся на море.
                    </p>
                    <p className="text-sm text-muted-foreground mt-1">(взаимоисключение)</p>
                  </li>
                  <li>
                    <p className="italic">
                      <span className="underline">Не то</span> он не понял вопроса,{" "}
                      <span className="underline">не то</span> не хотел отвечать.
                    </p>
                    <p className="text-sm text-muted-foreground mt-1">(неуверенность в выборе)</p>
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
              <h3 className="text-lg font-medium mb-3">Определите тип смысловых отношений в ССП:</h3>

              <div className="space-y-4">
                <div className="p-3 bg-muted rounded-md">
                  <p>
                    Солнце село, <span className="font-bold">и</span> наступили сумерки.
                  </p>
                  <p className="mt-2 text-sm text-muted-foreground">Подсказка: какая связь между действиями?</p>
                </div>

                <div className="p-3 bg-muted rounded-md">
                  <p>
                    Мне хотелось пойти в кино, <span className="font-bold">но</span> у меня было много работы.
                  </p>
                  <p className="mt-2 text-sm text-muted-foreground">Подсказка: как соотносятся части предложения?</p>
                </div>

                <div className="p-3 bg-muted rounded-md">
                  <p>
                    <span className="font-bold">Либо</span> ты сейчас извинишься,{" "}
                    <span className="font-bold">либо</span> мы уходим.
                  </p>
                  <p className="mt-2 text-sm text-muted-foreground">Подсказка: какие отношения между частями?</p>
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

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ArrowLeft } from "lucide-react"

export default function BSPPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <Link href="/" className="flex items-center gap-2 mb-6 text-muted-foreground hover:text-foreground">
        <ArrowLeft className="h-4 w-4" />
        <span>На главную</span>
      </Link>

      <h1 className="text-3xl font-bold mb-6">Бессоюзное сложное предложение (БСП)</h1>

      <div className="mb-8">
        <p className="text-lg mb-4">
          Бессоюзное сложное предложение — это предложение, части которого соединяются без союзов, только при помощи
          интонации.
        </p>
      </div>

      <Tabs defaultValue="rules" className="mb-8">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="rules">Правила</TabsTrigger>
          <TabsTrigger value="examples">Примеры</TabsTrigger>
          <TabsTrigger value="practice">Упражнения</TabsTrigger>
        </TabsList>
        <TabsContent value="rules" className="p-4 border rounded-md mt-2">
          <h2 className="text-xl font-semibold mb-4">Знаки препинания в БСП</h2>

          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-medium mb-2">Двоеточие ставится, если:</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Вторая часть поясняет первую (можно вставить «а именно»)</li>
                <li>Вторая часть указывает причину того, о чем говорится в первой (можно вставить «потому что»)</li>
                <li>
                  В первой части есть слова, предупреждающие о дальнейшем изложении (увидел, услышал, чувствую и т.д.)
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-medium mb-2">Тире ставится, если:</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Содержание частей противопоставляется</li>
                <li>Вторая часть содержит следствие, вывод из того, о чем говорится в первой</li>
                <li>Первая часть указывает на время или условие того, о чем говорится во второй</li>
                <li>Содержание частей сравнивается</li>
                <li>Вторая часть имеет значение быстрой смены событий</li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-medium mb-2">Точка с запятой ставится, если:</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Части предложения отдалены друг от друга по смыслу</li>
                <li>Части предложения значительны по объему</li>
                <li>Внутри частей уже есть запятые</li>
              </ul>
            </div>
          </div>
        </TabsContent>

        <TabsContent value="examples" className="p-4 border rounded-md mt-2">
          <h2 className="text-xl font-semibold mb-4">Примеры БСП</h2>

          <div className="space-y-6">
            <Card>
              <CardContent className="p-4">
                <h3 className="font-medium mb-2">С двоеточием:</h3>
                <ul className="space-y-3">
                  <li>
                    <p className="italic">Я понял одно: эта местность мне незнакома.</p>
                    <p className="text-sm text-muted-foreground mt-1">(вторая часть поясняет первую)</p>
                  </li>
                  <li>
                    <p className="italic">Павел не пошел в кино: он должен был заниматься.</p>
                    <p className="text-sm text-muted-foreground mt-1">(вторая часть указывает причину)</p>
                  </li>
                  <li>
                    <p className="italic">Я оглянулся: на опушке леса стоял олень.</p>
                    <p className="text-sm text-muted-foreground mt-1">
                      (в первой части есть слово, предупреждающее о дальнейшем изложении)
                    </p>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-4">
                <h3 className="font-medium mb-2">С тире:</h3>
                <ul className="space-y-3">
                  <li>
                    <p className="italic">Хочешь добиться успеха — работай усердно.</p>
                    <p className="text-sm text-muted-foreground mt-1">(условие и следствие)</p>
                  </li>
                  <li>
                    <p className="italic">Солнце дымное встает — будет день горячий.</p>
                    <p className="text-sm text-muted-foreground mt-1">(время и следствие)</p>
                  </li>
                  <li>
                    <p className="italic">Молвит слово — соловей поет.</p>
                    <p className="text-sm text-muted-foreground mt-1">(сравнение)</p>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-4">
                <h3 className="font-medium mb-2">С точкой с запятой:</h3>
                <ul className="space-y-3">
                  <li>
                    <p className="italic">Время стояло теплое, осеннее; солнце светило ярко.</p>
                    <p className="text-sm text-muted-foreground mt-1">(части отдалены по смыслу)</p>
                  </li>
                  <li>
                    <p className="italic">
                      Цветы были срезаны утром, когда на них еще блестела роса; теперь они стояли в вазе, свежие и
                      благоухающие.
                    </p>
                    <p className="text-sm text-muted-foreground mt-1">(внутри первой части есть запятая)</p>
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
              <h3 className="text-lg font-medium mb-3">Определите, какой знак препинания нужно поставить:</h3>

              <div className="space-y-4">
                <div className="p-3 bg-muted rounded-md">
                  <p>
                    Я оглянулся <span className="font-bold text-red-500">(?)</span> никого не было видно.
                  </p>
                  <p className="mt-2 text-sm text-muted-foreground">
                    Подсказка: подумайте о значении отношений между частями.
                  </p>
                </div>

                <div className="p-3 bg-muted rounded-md">
                  <p>
                    Будешь книги читать <span className="font-bold text-red-500">(?)</span> будешь все знать.
                  </p>
                  <p className="mt-2 text-sm text-muted-foreground">
                    Подсказка: какое значение имеет первая часть по отношению ко второй?
                  </p>
                </div>

                <div className="p-3 bg-muted rounded-md">
                  <p>
                    Я знаю <span className="font-bold text-red-500">(?)</span> ты мне поможешь.
                  </p>
                  <p className="mt-2 text-sm text-muted-foreground">
                    Подсказка: обратите внимание на глагол в первой части.
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

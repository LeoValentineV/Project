"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { Progress } from "@/components/ui/progress"
import { ArrowLeft, CheckCircle2, XCircle } from "lucide-react"

const questions = [
  {
    id: 1,
    question: "Какое предложение является бессоюзным сложным предложением (БСП)?",
    options: [
      { id: "a", text: "Я знаю, что ты придешь." },
      { id: "b", text: "Солнце село, и стало темно." },
      { id: "c", text: "Солнце село — стало темно." },
      { id: "d", text: "Когда солнце село, стало темно." },
    ],
    correctAnswer: "c",
    explanation: "В БСП части соединяются без союзов, только с помощью интонации. В данном случае используется тире.",
  },
  {
    id: 2,
    question: "Какое предложение является сложноподчиненным (СПП)?",
    options: [
      { id: "a", text: "Я пришел домой, и все обрадовались." },
      { id: "b", text: "Я пришел домой; все обрадовались." },
      { id: "c", text: "Когда я пришел домой, все обрадовались." },
      { id: "d", text: "Я пришел домой — все обрадовались." },
    ],
    correctAnswer: "c",
    explanation:
      "В СПП одна часть подчиняется другой и присоединяется подчинительным союзом или союзным словом. В данном случае используется союз 'когда'.",
  },
  {
    id: 3,
    question: "Какое предложение является сложносочиненным (ССП)?",
    options: [
      { id: "a", text: "Я читаю книгу, которую мне подарили." },
      { id: "b", text: "Я читаю книгу, и мне нравится сюжет." },
      { id: "c", text: "Я читаю книгу; сюжет интересный." },
      { id: "d", text: "Я читаю книгу, потому что сюжет интересный." },
    ],
    correctAnswer: "b",
    explanation:
      "В ССП части равноправны и соединяются сочинительным союзом. В данном случае используется соединительный союз 'и'.",
  },
  {
    id: 4,
    question: "В каком случае в БСП ставится двоеточие?",
    options: [
      { id: "a", text: "Если вторая часть указывает на причину того, о чем говорится в первой" },
      { id: "b", text: "Если вторая часть содержит следствие из того, о чем говорится в первой" },
      { id: "c", text: "Если содержание частей противопоставляется" },
      { id: "d", text: "Если первая часть указывает на условие того, о чем говорится во второй" },
    ],
    correctAnswer: "a",
    explanation:
      "Двоеточие в БСП ставится, если вторая часть указывает на причину того, о чем говорится в первой (можно вставить 'потому что').",
  },
  {
    id: 5,
    question: "Какой союз НЕ является противительным?",
    options: [
      { id: "a", text: "но" },
      { id: "b", text: "однако" },
      { id: "c", text: "зато" },
      { id: "d", text: "либо" },
    ],
    correctAnswer: "d",
    explanation: "'Либо' — это разделительный союз. Противительные союзы: 'но', 'однако', 'зато', 'а'.",
  },
  {
    id: 6,
    question: "Какое средство связи используется в СПП?",
    options: [
      { id: "a", text: "Сочинительные союзы" },
      { id: "b", text: "Подчинительные союзы и союзные слова" },
      { id: "c", text: "Только интонация" },
      { id: "d", text: "Разделительные союзы" },
    ],
    correctAnswer: "b",
    explanation:
      "В СПП используются подчинительные союзы (что, чтобы, если и др.) и союзные слова (который, где, когда и др.).",
  },
  {
    id: 7,
    question: "Определите тип предложения: 'То светило солнце, то набегали тучи.'",
    options: [
      { id: "a", text: "БСП" },
      { id: "b", text: "СПП" },
      { id: "c", text: "ССП" },
      { id: "d", text: "Простое предложение с однородными членами" },
    ],
    correctAnswer: "c",
    explanation: "Это ССП с разделительным союзом 'то...то', выражающим чередование явлений.",
  },
  {
    id: 8,
    question: "В каком случае в БСП ставится тире?",
    options: [
      { id: "a", text: "Если вторая часть поясняет первую" },
      { id: "b", text: "Если вторая часть указывает на причину" },
      { id: "c", text: "Если вторая часть содержит следствие из того, о чем говорится в первой" },
      { id: "d", text: "Если в первой части есть слова, предупреждающие о дальнейшем изложении" },
    ],
    correctAnswer: "c",
    explanation: "Тире в БСП ставится, если вторая часть содержит следствие, вывод из того, о чем говорится в первой.",
  },
  {
    id: 9,
    question: "Определите тип предложения: 'Я знаю: он не придет.'",
    options: [
      { id: "a", text: "БСП" },
      { id: "b", text: "СПП" },
      { id: "c", text: "ССП" },
      { id: "d", text: "Простое предложение с прямой речью" },
    ],
    correctAnswer: "a",
    explanation:
      "Это БСП, части которого соединены без союзов. Двоеточие ставится, так как в первой части есть слово, предупреждающее о дальнейшем изложении.",
  },
  {
    id: 10,
    question: "Какой тип придаточного в предложении: 'Я не пошел гулять, потому что шел дождь.'?",
    options: [
      { id: "a", text: "Определительное" },
      { id: "b", text: "Изъяснительное" },
      { id: "c", text: "Обстоятельственное причины" },
      { id: "d", text: "Обстоятельственное цели" },
    ],
    correctAnswer: "c",
    explanation:
      "Это придаточное обстоятельственное причины, так как оно отвечает на вопрос 'почему?' и присоединяется союзом 'потому что'.",
  },
  {
    id: 11,
    question: "В каком предложении правильно поставлен знак препинания?",
    options: [
      { id: "a", text: "Я увидел, что дождь закончился." },
      { id: "b", text: "Я увидел: что дождь закончился." },
      { id: "c", text: "Я увидел — что дождь закончился." },
      { id: "d", text: "Я увидел; что дождь закончился." },
    ],
    correctAnswer: "a",
    explanation: "В СПП придаточная изъяснительная часть отделяется от главной запятой.",
  },
  {
    id: 12,
    question: "Какое предложение содержит придаточное определительное?",
    options: [
      { id: "a", text: "Я знаю, что ты скоро приедешь." },
      { id: "b", text: "Дом, который стоит на углу, очень красивый." },
      { id: "c", text: "Когда наступит весна, мы поедем на дачу." },
      { id: "d", text: "Он говорил так тихо, что его не было слышно." },
    ],
    correctAnswer: "b",
    explanation:
      "Придаточное определительное отвечает на вопросы 'какой?', 'который?' и поясняет существительное в главной части.",
  },
  {
    id: 13,
    question: "В каком случае запятая в ССП НЕ ставится?",
    options: [
      { id: "a", text: "Когда части имеют общий второстепенный член" },
      { id: "b", text: "Когда союз повторяется" },
      { id: "c", text: "Когда части большие по объему" },
      { id: "d", text: "Когда союз стоит в начале предложения" },
    ],
    correctAnswer: "a",
    explanation:
      "Запятая в ССП не ставится, если части имеют общий второстепенный член или общее придаточное предложение.",
  },
  {
    id: 14,
    question: "Определите тип предложения: 'Книга лежала на столе; рядом стояла лампа.'",
    options: [
      { id: "a", text: "БСП" },
      { id: "b", text: "СПП" },
      { id: "c", text: "ССП" },
      { id: "d", text: "Простое предложение" },
    ],
    correctAnswer: "a",
    explanation:
      "Это БСП, части которого соединены без союзов. Точка с запятой ставится, так как части отдалены по смыслу.",
  },
  {
    id: 15,
    question: "Какой союз является соединительным?",
    options: [
      { id: "a", text: "но" },
      { id: "b", text: "или" },
      { id: "c", text: "тоже" },
      { id: "d", text: "однако" },
    ],
    correctAnswer: "c",
    explanation: "'Тоже' — соединительный союз. Он выражает присоединение, добавление.",
  },
  {
    id: 16,
    question: "В каком предложении есть придаточное времени?",
    options: [
      { id: "a", text: "Я знаю, где ты живешь." },
      { id: "b", text: "Пока шел дождь, мы сидели дома." },
      { id: "c", text: "Он сказал, что придет завтра." },
      { id: "d", text: "Дом, который мы купили, находится в центре." },
    ],
    correctAnswer: "b",
    explanation:
      "Придаточное времени отвечает на вопросы 'когда?', 'как долго?' и присоединяется союзами времени (пока, когда, после того как и др.).",
  },
  {
    id: 17,
    question: "Какое предложение является примером БСП с тире?",
    options: [
      { id: "a", text: "Я понял одно: нужно торопиться." },
      { id: "b", text: "Будешь много читать — будешь много знать." },
      { id: "c", text: "На улице дождь, поэтому мы остались дома." },
      { id: "d", text: "Солнце светило ярко, и настроение было отличное." },
    ],
    correctAnswer: "b",
    explanation: "В БСП тире ставится, если первая часть указывает на условие того, о чем говорится во второй части.",
  },
  {
    id: 18,
    question: "Определите тип союза 'зато':",
    options: [
      { id: "a", text: "Соединительный" },
      { id: "b", text: "Противительный" },
      { id: "c", text: "Разделительный" },
      { id: "d", text: "Подчинительный" },
    ],
    correctAnswer: "b",
    explanation: "'Зато' — противительный союз, выражающий возмещение, компенсацию.",
  },
  {
    id: 19,
    question: "В каком предложении есть придаточное цели?",
    options: [
      { id: "a", text: "Я пришел, чтобы поговорить с тобой." },
      { id: "b", text: "Я знаю, что ты хочешь сказать." },
      { id: "c", text: "Когда ты придешь, мы поговорим." },
      { id: "d", text: "Дом, где я родился, снесли." },
    ],
    correctAnswer: "a",
    explanation: "Придаточное цели отвечает на вопросы 'зачем?', 'для чего?' и присоединяется союзом 'чтобы'.",
  },
  {
    id: 20,
    question: "Какое предложение содержит ошибку в постановке знаков препинания?",
    options: [
      { id: "a", text: "Солнце село, и наступила ночь." },
      { id: "b", text: "Я знаю: ты придешь." },
      { id: "c", text: "Если будет дождь мы останемся дома." },
      { id: "d", text: "Книга интересная — читается легко." },
    ],
    correctAnswer: "c",
    explanation:
      "В СПП придаточная часть должна отделяться от главной запятой. Правильно: 'Если будет дождь, мы останемся дома.'",
  },
  {
    id: 21,
    question: "Определите тип предложения: 'Не то дождь пойдет, не то снег выпадет.'",
    options: [
      { id: "a", text: "БСП" },
      { id: "b", text: "СПП" },
      { id: "c", text: "ССП" },
      { id: "d", text: "Простое предложение" },
    ],
    correctAnswer: "c",
    explanation: "Это ССП с разделительным союзом 'не то...не то', выражающим неуверенность в выборе.",
  },
  {
    id: 22,
    question: "В каком предложении есть придаточное места?",
    options: [
      { id: "a", text: "Я иду туда, где меня ждут." },
      { id: "b", text: "Я знаю, что меня ждут." },
      { id: "c", text: "Когда меня ждут, я прихожу быстрее." },
      { id: "d", text: "Люди, которые меня ждут, очень терпеливые." },
    ],
    correctAnswer: "a",
    explanation:
      "Придаточное места отвечает на вопросы 'где?', 'куда?', 'откуда?' и присоединяется союзными словами 'где', 'куда', 'откуда'.",
  },
  {
    id: 23,
    question: "Какой знак препинания нужен в предложении: 'Я посмотрел в окно (...) на улице никого не было'?",
    options: [
      { id: "a", text: "запятая" },
      { id: "b", text: "двоеточие" },
      { id: "c", text: "тире" },
      { id: "d", text: "точка с запятой" },
    ],
    correctAnswer: "c",
    explanation:
      "В БСП ставится тире, так как вторая часть содержит следствие из того, о чем говорится в первой части.",
  },
  {
    id: 24,
    question: "Определите тип придаточного в предложении: 'Он работал так усердно, что все удивлялись.'",
    options: [
      { id: "a", text: "Придаточное образа действия" },
      { id: "b", text: "Придаточное степени" },
      { id: "c", text: "Придаточное следствия" },
      { id: "d", text: "Придаточное сравнения" },
    ],
    correctAnswer: "b",
    explanation:
      "Это придаточное степени, которое поясняет степень проявления признака, выраженного в главной части наречием с указательным словом 'так'.",
  },
  {
    id: 25,
    question: "В каком предложении союз 'и' соединяет части ССП?",
    options: [
      { id: "a", text: "Мама и папа пошли в театр." },
      { id: "b", text: "Солнце светило, и птицы пели." },
      { id: "c", text: "Красивый и умный мальчик." },
      { id: "d", text: "Читать и писать — важные навыки." },
    ],
    correctAnswer: "b",
    explanation:
      "В этом предложении союз 'и' соединяет две грамматические основы, образуя ССП. В остальных случаях 'и' соединяет однородные члены.",
  },
  {
    id: 26,
    question: "Какое предложение содержит придаточное условия?",
    options: [
      { id: "a", text: "Если завтра будет хорошая погода, мы пойдем в парк." },
      { id: "b", text: "Я знаю, что завтра будет хорошая погода." },
      { id: "c", text: "Когда будет хорошая погода, мы пойдем в парк." },
      { id: "d", text: "Парк, где мы гуляем, очень красивый." },
    ],
    correctAnswer: "a",
    explanation: "Придаточное условия отвечает на вопрос 'при каком условии?' и присоединяется союзом 'если'.",
  },
  {
    id: 27,
    question: "В каком случае в БСП ставится точка с запятой?",
    options: [
      { id: "a", text: "Если вторая часть указывает на причину" },
      { id: "b", text: "Если части предложения значительны по объему" },
      { id: "c", text: "Если вторая часть содержит следствие" },
      { id: "d", text: "Если содержание частей противопоставляется" },
    ],
    correctAnswer: "b",
    explanation:
      "Точка с запятой в БСП ставится, если части предложения значительны по объему, отдалены по смыслу или внутри частей уже есть запятые.",
  },
  {
    id: 28,
    question: "Определите тип предложения: 'Ни солнца не было видно, ни звезд на небе.'",
    options: [
      { id: "a", text: "БСП" },
      { id: "b", text: "СПП" },
      { id: "c", text: "ССП" },
      { id: "d", text: "Простое предложение с однородными членами" },
    ],
    correctAnswer: "c",
    explanation: "Это ССП с соединительным союзом 'ни...ни', выражающим отрицание одновременности действий.",
  },
  {
    id: 29,
    question: "В каком предложении есть придаточное причины?",
    options: [
      { id: "a", text: "Я не пошел в кино, потому что был занят." },
      { id: "b", text: "Я пошел в кино, чтобы отдохнуть." },
      { id: "c", text: "Когда я пошел в кино, встретил друга." },
      { id: "d", text: "Кино, которое я посмотрел, было интересным." },
    ],
    correctAnswer: "a",
    explanation:
      "Придаточное причины отвечает на вопросы 'почему?', 'отчего?' и присоединяется союзами 'потому что', 'так как', 'оттого что' и др.",
  },
  {
    id: 30,
    question: "Какое предложение является примером БСП с двоеточием?",
    options: [
      { id: "a", text: "Солнце село — стало темно." },
      { id: "b", text: "Я понял одно: нужно спешить." },
      { id: "c", text: "Дождь кончился, выглянуло солнце." },
      { id: "d", text: "Либо дождь, либо снег — все равно плохая погода." },
    ],
    correctAnswer: "b",
    explanation: "В БСП двоеточие ставится, если вторая часть поясняет первую (можно вставить 'а именно').",
  },
]

export default function QuizPage() {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [selectedAnswers, setSelectedAnswers] = useState<Record<number, string>>({})
  const [showResults, setShowResults] = useState(false)
  const [showExplanation, setShowExplanation] = useState(false)

  const handleAnswerSelect = (answerId: string) => {
    setSelectedAnswers({
      ...selectedAnswers,
      [questions[currentQuestion].id]: answerId,
    })
  }

  const handleNextQuestion = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1)
      setShowExplanation(false)
    } else {
      setShowResults(true)
    }
  }

  const handlePreviousQuestion = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1)
      setShowExplanation(false)
    }
  }

  const calculateScore = () => {
    let score = 0
    questions.forEach((question) => {
      if (selectedAnswers[question.id] === question.correctAnswer) {
        score++
      }
    })
    return score
  }

  const resetQuiz = () => {
    setCurrentQuestion(0)
    setSelectedAnswers({})
    setShowResults(false)
    setShowExplanation(false)
  }

  const progress = ((currentQuestion + 1) / questions.length) * 100

  if (showResults) {
    const score = calculateScore()
    const percentage = (score / questions.length) * 100

    return (
      <div className="container mx-auto px-4 py-12 max-w-3xl">
        <Card className="w-full">
          <CardHeader>
            <CardTitle className="text-2xl">Результаты теста</CardTitle>
            <CardDescription>
              Вы ответили правильно на {score} из {questions.length} вопросов ({percentage.toFixed(0)}%)
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {questions.map((question, index) => {
                const isCorrect = selectedAnswers[question.id] === question.correctAnswer
                return (
                  <div key={question.id} className="p-4 border rounded-lg">
                    <div className="flex items-start gap-2">
                      {isCorrect ? (
                        <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                      ) : (
                        <XCircle className="h-5 w-5 text-red-500 mt-0.5 flex-shrink-0" />
                      )}
                      <div>
                        <p className="font-medium">
                          {index + 1}. {question.question}
                        </p>
                        <div className="mt-2 text-sm">
                          <p>
                            <span className="font-medium">Ваш ответ: </span>
                            {question.options.find((option) => option.id === selectedAnswers[question.id])?.text ||
                              "Не выбран"}
                          </p>
                          {!isCorrect && (
                            <p className="text-green-600 dark:text-green-400">
                              <span className="font-medium">Правильный ответ: </span>
                              {question.options.find((option) => option.id === question.correctAnswer)?.text}
                            </p>
                          )}
                          <p className="mt-1 text-muted-foreground">{question.explanation}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </CardContent>
          <CardFooter className="flex justify-between">
            <Link href="/">
              <Button variant="outline">На главную</Button>
            </Link>
            <Button onClick={resetQuiz}>Пройти тест снова</Button>
          </CardFooter>
        </Card>
      </div>
    )
  }

  const currentQuestionData = questions[currentQuestion]
  const selectedAnswer = selectedAnswers[currentQuestionData.id]
  const isAnswerSelected = !!selectedAnswer
  const isCorrect = selectedAnswer === currentQuestionData.correctAnswer

  return (
    <div className="container mx-auto px-4 py-12 max-w-3xl">
      <Link href="/" className="flex items-center gap-2 mb-6 text-muted-foreground hover:text-foreground">
        <ArrowLeft className="h-4 w-4" />
        <span>На главную</span>
      </Link>

      <div className="mb-6">
        <h1 className="text-3xl font-bold mb-2">Тест по сложным предложениям</h1>
        <p className="text-muted-foreground">Проверьте свои знания о БСП, СПП и ССП</p>
      </div>

      <div className="mb-6">
        <div className="flex justify-between text-sm mb-2">
          <span>
            Вопрос {currentQuestion + 1} из {questions.length}
          </span>
          <span>{Math.round(progress)}%</span>
        </div>
        <Progress value={progress} className="h-2" />
      </div>

      <Card className="w-full">
        <CardHeader>
          <CardTitle className="text-xl">{currentQuestionData.question}</CardTitle>
        </CardHeader>
        <CardContent>
          <RadioGroup value={selectedAnswer} onValueChange={handleAnswerSelect} className="space-y-3">
            {currentQuestionData.options.map((option) => (
              <div
                key={option.id}
                className={`flex items-center space-x-2 rounded-md border p-3 ${
                  showExplanation && option.id === currentQuestionData.correctAnswer
                    ? "border-green-500 bg-green-50 dark:bg-green-950/20"
                    : showExplanation && option.id === selectedAnswer && option.id !== currentQuestionData.correctAnswer
                      ? "border-red-500 bg-red-50 dark:bg-red-950/20"
                      : ""
                }`}
              >
                <RadioGroupItem value={option.id} id={`option-${option.id}`} />
                <Label htmlFor={`option-${option.id}`} className="flex-grow cursor-pointer">
                  {option.text}
                </Label>
              </div>
            ))}
          </RadioGroup>

          {showExplanation && (
            <div className="mt-4 p-4 bg-muted rounded-md">
              <p className="font-medium">Объяснение:</p>
              <p>{currentQuestionData.explanation}</p>
            </div>
          )}
        </CardContent>
        <CardFooter className="flex justify-between">
          <Button variant="outline" onClick={handlePreviousQuestion} disabled={currentQuestion === 0}>
            Назад
          </Button>
          <div className="space-x-2">
            {!showExplanation && isAnswerSelected && (
              <Button onClick={() => setShowExplanation(true)} variant="secondary">
                Проверить
              </Button>
            )}
            <Button onClick={handleNextQuestion} disabled={!isAnswerSelected}>
              {currentQuestion < questions.length - 1 ? "Следующий вопрос" : "Завершить тест"}
            </Button>
          </div>
        </CardFooter>
      </Card>
    </div>
  )
}

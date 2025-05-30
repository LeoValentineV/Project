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
    question: "Какой знак препинания нужен в предложении: 'Я увидел (...) дом стоит на холме'?",
    options: [
      { id: "a", text: "запятая" },
      { id: "b", text: "двоеточие" },
      { id: "c", text: "тире" },
      { id: "d", text: "точка с запятой" },
    ],
    correctAnswer: "b",
    explanation:
      "Двоеточие ставится, так как в первой части есть глагол восприятия 'увидел', предупреждающий о дальнейшем изложении.",
  },
  {
    id: 12,
    question: "Определите тип придаточного: 'Дом, который построил мой дед, стоит до сих пор.'",
    options: [
      { id: "a", text: "Определительное" },
      { id: "b", text: "Изъяснительное" },
      { id: "c", text: "Обстоятельственное" },
      { id: "d", text: "Присоединительное" },
    ],
    correctAnswer: "a",
    explanation: "Придаточное определительное отвечает на вопрос 'какой?' и поясняет существительное 'дом'.",
  },
  {
    id: 13,
    question: "Какое предложение содержит разделительный союз?",
    options: [
      { id: "a", text: "Солнце светило, и птицы пели." },
      { id: "b", text: "Либо ты идешь, либо я ухожу." },
      { id: "c", text: "Дождь прошел, но лужи остались." },
      { id: "d", text: "Я пришел, чтобы помочь." },
    ],
    correctAnswer: "b",
    explanation: "'Либо...либо' — разделительный союз, выражающий взаимоисключение.",
  },
  {
    id: 14,
    question: "В каком предложении нужна точка с запятой?",
    options: [
      { id: "a", text: "Солнце село (...) стало темно." },
      { id: "b", text: "Я знаю (...) ты придешь." },
      { id: "c", text: "Наступила осень (...) листья пожелтели и опали." },
      { id: "d", text: "Будешь учиться (...) станешь умным." },
    ],
    correctAnswer: "c",
    explanation: "Точка с запятой ставится, когда части БСП значительны по объему и отдалены по смыслу.",
  },
  {
    id: 15,
    question: "Какое слово является союзным в предложении: 'Я помню место, где мы встретились'?",
    options: [
      { id: "a", text: "я" },
      { id: "b", text: "помню" },
      { id: "c", text: "место" },
      { id: "d", text: "где" },
    ],
    correctAnswer: "d",
    explanation: "'Где' — союзное слово, которое присоединяет придаточное определительное к главной части.",
  },
  {
    id: 16,
    question: "Определите тип предложения: 'Хочешь быть здоровым — занимайся спортом.'",
    options: [
      { id: "a", text: "ССП" },
      { id: "b", text: "СПП" },
      { id: "c", text: "БСП" },
      { id: "d", text: "Простое предложение" },
    ],
    correctAnswer: "c",
    explanation: "Это БСП с тире, выражающее условно-следственные отношения.",
  },
  {
    id: 17,
    question: "Какой союз является соединительным?",
    options: [
      { id: "a", text: "но" },
      { id: "b", text: "или" },
      { id: "c", text: "да (=и)" },
      { id: "d", text: "зато" },
    ],
    correctAnswer: "c",
    explanation: "'Да' в значении 'и' является соединительным союзом.",
  },
  {
    id: 18,
    question: "В каком предложении придаточная часть стоит в середине главной?",
    options: [
      { id: "a", text: "Когда пришла весна, птицы вернулись." },
      { id: "b", text: "Книга, которую я читаю, очень интересная." },
      { id: "c", text: "Я знаю, что ты придешь." },
      { id: "d", text: "Он ушел, потому что опаздывал." },
    ],
    correctAnswer: "b",
    explanation:
      "Придаточное определительное 'которую я читаю' стоит внутри главной части и выделяется запятыми с обеих сторон.",
  },
  {
    id: 19,
    question: "Какое значение имеет союз 'зато' в ССП?",
    options: [
      { id: "a", text: "Соединительное" },
      { id: "b", text: "Разделительное" },
      { id: "c", text: "Противительное (возмещение)" },
      { id: "d", text: "Пояснительное" },
    ],
    correctAnswer: "c",
    explanation: "Союз 'зато' выражает противительные отношения с оттенком возмещения.",
  },
  {
    id: 20,
    question: "Определите тип предложения: 'Ни солнца не было видно, ни звезд на небе.'",
    options: [
      { id: "a", text: "БСП" },
      { id: "b", text: "СПП" },
      { id: "c", text: "ССП" },
      { id: "d", text: "Простое с однородными членами" },
    ],
    correctAnswer: "c",
    explanation: "Это ССП с соединительным союзом 'ни...ни', выражающим отрицание.",
  },
  {
    id: 21,
    question: "Какой знак нужен в БСП: 'Посеешь ветер (...) пожнешь бурю'?",
    options: [
      { id: "a", text: "запятая" },
      { id: "b", text: "двоеточие" },
      { id: "c", text: "тире" },
      { id: "d", text: "точка с запятой" },
    ],
    correctAnswer: "c",
    explanation: "Тире ставится, так как первая часть выражает условие, а вторая — следствие.",
  },
  {
    id: 22,
    question: "Какое придаточное отвечает на вопросы косвенных падежей?",
    options: [
      { id: "a", text: "Определительное" },
      { id: "b", text: "Изъяснительное" },
      { id: "c", text: "Обстоятельственное" },
      { id: "d", text: "Присоединительное" },
    ],
    correctAnswer: "b",
    explanation: "Изъяснительные придаточные отвечают на вопросы косвенных падежей: что? о чем? кому? и т.д.",
  },
  {
    id: 23,
    question: "В каком предложении есть составной подчинительный союз?",
    options: [
      { id: "a", text: "Я знаю, что ты придешь." },
      { id: "b", text: "Он опоздал, потому что проспал." },
      { id: "c", text: "Когда пришла весна, все расцвело." },
      { id: "d", text: "Дом, который мы купили, новый." },
    ],
    correctAnswer: "b",
    explanation: "'Потому что' — составной подчинительный союз причины.",
  },
  {
    id: 24,
    question: "Определите тип предложения: 'Гром грянул — дождь хлынул как из ведра.'",
    options: [
      { id: "a", text: "ССП" },
      { id: "b", text: "СПП" },
      { id: "c", text: "БСП" },
      { id: "d", text: "Простое предложение" },
    ],
    correctAnswer: "c",
    explanation: "Это БСП с тире, выражающее быструю смену событий.",
  },
  {
    id: 25,
    question: "Какой союз НЕ является разделительным?",
    options: [
      { id: "a", text: "или" },
      { id: "b", text: "либо" },
      { id: "c", text: "то...то" },
      { id: "d", text: "также" },
    ],
    correctAnswer: "d",
    explanation: "'Также' — соединительный союз. Разделительные: или, либо, то...то, не то...не то.",
  },
  {
    id: 26,
    question: "В каком случае запятая в ССП НЕ ставится?",
    options: [
      { id: "a", text: "Если части имеют общий второстепенный член" },
      { id: "b", text: "Если части соединены союзом 'и'" },
      { id: "c", text: "Если части соединены союзом 'но'" },
      { id: "d", text: "Если части соединены союзом 'или'" },
    ],
    correctAnswer: "a",
    explanation:
      "Запятая не ставится, если части ССП имеют общий второстепенный член или общее придаточное предложение.",
  },
  {
    id: 27,
    question: "Определите тип придаточного: 'Я пришел туда, куда меня позвали.'",
    options: [
      { id: "a", text: "Определительное" },
      { id: "b", text: "Изъяснительное" },
      { id: "c", text: "Обстоятельственное места" },
      { id: "d", text: "Обстоятельственное цели" },
    ],
    correctAnswer: "c",
    explanation:
      "Придаточное обстоятельственное места отвечает на вопрос 'куда?' и присоединяется союзным словом 'куда'.",
  },
  {
    id: 28,
    question: "Какой знак нужен в БСП: 'Я оглянулся (...) никого не было'?",
    options: [
      { id: "a", text: "запятая" },
      { id: "b", text: "двоеточие" },
      { id: "c", text: "тире" },
      { id: "d", text: "точка с запятой" },
    ],
    correctAnswer: "c",
    explanation: "Тире ставится, так как вторая часть содержит неожиданный результат, следствие.",
  },
  {
    id: 29,
    question: "Какое предложение является многочленным СПП?",
    options: [
      { id: "a", text: "Я знаю, что ты придешь." },
      { id: "b", text: "Когда наступила весна, которую мы так ждали, все расцвело." },
      { id: "c", text: "Дом, который мы купили, красивый." },
      { id: "d", text: "Он сказал, что опоздает." },
    ],
    correctAnswer: "b",
    explanation:
      "В этом предложении есть главная часть и два придаточных: времени ('когда наступила весна') и определительное ('которую мы так ждали').",
  },
  {
    id: 30,
    question: "Определите значение отношений в ССП: 'Солнце светило ярко, но было холодно.'",
    options: [
      { id: "a", text: "Соединительные" },
      { id: "b", text: "Противительные" },
      { id: "c", text: "Разделительные" },
      { id: "d", text: "Пояснительные" },
    ],
    correctAnswer: "b",
    explanation: "Союз 'но' выражает противительные отношения — противопоставление.",
  },
  {
    id: 31,
    question: "В каком предложении союз 'что' является союзным словом?",
    options: [
      { id: "a", text: "Я знаю, что ты придешь." },
      { id: "b", text: "Он сказал, что опоздает." },
      { id: "c", text: "Что случилось, я не понял." },
      { id: "d", text: "Мне кажется, что дождь начинается." },
    ],
    correctAnswer: "c",
    explanation:
      "В предложении 'Что случилось, я не понял' слово 'что' является союзным словом (можно заменить на 'то, что случилось').",
  },
  {
    id: 32,
    question: "Какой знак нужен в БСП: 'Лес рубят (...) щепки летят'?",
    options: [
      { id: "a", text: "запятая" },
      { id: "b", text: "двоеточие" },
      { id: "c", text: "тире" },
      { id: "d", text: "точка с запятой" },
    ],
    correctAnswer: "c",
    explanation: "Тире ставится, так как вторая часть выражает следствие из того, о чем говорится в первой.",
  },
  {
    id: 33,
    question: "Определите тип предложения: 'Скажи мне, кто твой друг, и я скажу, кто ты.'",
    options: [
      { id: "a", text: "ССП" },
      { id: "b", text: "СПП" },
      { id: "c", text: "БСП" },
      { id: "d", text: "Сложное предложение с разными видами связи" },
    ],
    correctAnswer: "d",
    explanation: "Это сложное предложение с сочинительной ('и') и подчинительной связью (придаточные изъяснительные).",
  },
  {
    id: 34,
    question: "Какое придаточное присоединяется союзом 'чтобы'?",
    options: [
      { id: "a", text: "Определительное" },
      { id: "b", text: "Изъяснительное" },
      { id: "c", text: "Обстоятельственное цели" },
      { id: "d", text: "Обстоятельственное причины" },
    ],
    correctAnswer: "c",
    explanation: "Союз 'чтобы' присоединяет придаточные цели, отвечающие на вопросы 'зачем?', 'для чего?'.",
  },
  {
    id: 35,
    question: "В каком предложении нужно поставить двоеточие?",
    options: [
      { id: "a", text: "Солнце село (...) стало темно." },
      { id: "b", text: "Будешь учиться (...) станешь умным." },
      { id: "c", text: "Я понял одно (...) нужно торопиться." },
      { id: "d", text: "Прозвенел звонок (...) урок начался." },
    ],
    correctAnswer: "c",
    explanation: "Двоеточие ставится, так как вторая часть поясняет первую (можно вставить 'а именно').",
  },
  {
    id: 36,
    question: "Определите тип придаточного: 'Он работал так усердно, что все удивлялись.'",
    options: [
      { id: "a", text: "Определительное" },
      { id: "b", text: "Изъяснительное" },
      { id: "c", text: "Обстоятельственное степени" },
      { id: "d", text: "Обстоятельственное следствия" },
    ],
    correctAnswer: "c",
    explanation:
      "Придаточное степени отвечает на вопрос 'в какой степени?' и присоединяется союзом 'что' при указательном слове 'так'.",
  },
  {
    id: 37,
    question: "Какое предложение содержит неполную вторую часть?",
    options: [
      { id: "a", text: "Я читаю книгу, а брат — журнал." },
      { id: "b", text: "Солнце светило, и птицы пели." },
      { id: "c", text: "Либо дождь, либо снег." },
      { id: "d", text: "Пришла весна, но холода продолжались." },
    ],
    correctAnswer: "a",
    explanation: "Во второй части пропущено сказуемое 'читает', на месте которого ставится тире.",
  },
  {
    id: 38,
    question: "В каком случае составной союз 'потому что' может расчленяться?",
    options: [
      { id: "a", text: "Никогда" },
      { id: "b", text: "Всегда" },
      { id: "c", text: "При логическом выделении причины" },
      { id: "d", text: "Только в начале предложения" },
    ],
    correctAnswer: "c",
    explanation:
      "Составной союз 'потому что' расчленяется при логическом выделении причины: 'Он опоздал потому, что проспал'.",
  },
  {
    id: 39,
    question: "Определите тип предложения: 'Не то дождь, не то снег.'",
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
    id: 40,
    question: "Какой знак нужен в БСП: 'Любишь кататься (...) люби и саночки возить'?",
    options: [
      { id: "a", text: "запятая" },
      { id: "b", text: "двоеточие" },
      { id: "c", text: "тире" },
      { id: "d", text: "точка с запятой" },
    ],
    correctAnswer: "c",
    explanation: "Тире ставится, так как первая часть выражает условие, а вторая — следствие (пословица).",
  },
  {
    id: 41,
    question: "Определите тип придаточного: 'Мы пошли в лес, чтобы собрать грибы.'",
    options: [
      { id: "a", text: "Определительное" },
      { id: "b", text: "Изъяснительное" },
      { id: "c", text: "Обстоятельственное цели" },
      { id: "d", text: "Обстоятельственное причины" },
    ],
    correctAnswer: "c",
    explanation: "Придаточное цели отвечает на вопрос 'зачем?' и присоединяется союзом 'чтобы'.",
  },
  {
    id: 42,
    question: "В каком предложении союз 'и' соединяет части ССП?",
    options: [
      { id: "a", text: "Мама и папа пошли в театр." },
      { id: "b", text: "Солнце светило, и птицы пели." },
      { id: "c", text: "Красивые и умные дети." },
      { id: "d", text: "Читать и писать важно." },
    ],
    correctAnswer: "b",
    explanation: "Только в этом предложении союз 'и' соединяет две грамматические основы, образуя ССП.",
  },
  {
    id: 43,
    question: "Какое значение имеет БСП: 'Назвался груздем — полезай в кузов'?",
    options: [
      { id: "a", text: "Причинно-следственное" },
      { id: "b", text: "Условно-следственное" },
      { id: "c", text: "Временное" },
      { id: "d", text: "Сравнительное" },
    ],
    correctAnswer: "b",
    explanation: "Первая часть выражает условие, вторая — следствие из этого условия.",
  },
  {
    id: 44,
    question: "Определите тип придаточного: 'Дом стоял там, где раньше был лес.'",
    options: [
      { id: "a", text: "Определительное" },
      { id: "b", text: "Изъяснительное" },
      { id: "c", text: "Обстоятельственное места" },
      { id: "d", text: "Обстоятельственное времени" },
    ],
    correctAnswer: "c",
    explanation: "Придаточное места отвечает на вопрос 'где?' и присоединяется союзным словом 'где'.",
  },
  {
    id: 45,
    question: "В каком предложении есть однородное подчинение?",
    options: [
      { id: "a", text: "Я знаю, что ты придешь и что мы встретимся." },
      { id: "b", text: "Когда пришла весна, которую мы ждали, все расцвело." },
      { id: "c", text: "Дом, который мы купили, стоит на холме." },
      { id: "d", text: "Он сказал, что опоздает." },
    ],
    correctAnswer: "a",
    explanation: "Однородное подчинение — когда к одной главной части относятся несколько придаточных одного типа.",
  },
  {
    id: 46,
    question: "Какой знак нужен в БСП: 'Делу время (...) потехе час'?",
    options: [
      { id: "a", text: "запятая" },
      { id: "b", text: "двоеточие" },
      { id: "c", text: "тире" },
      { id: "d", text: "точка с запятой" },
    ],
    correctAnswer: "c",
    explanation: "Тире ставится при сопоставлении (противопоставлении) частей БСП.",
  },
  {
    id: 47,
    question: "Определите тип предложения: 'Если будет дождь, мы останемся дома.'",
    options: [
      { id: "a", text: "ССП" },
      { id: "b", text: "СПП" },
      { id: "c", text: "БСП" },
      { id: "d", text: "Простое предложение" },
    ],
    correctAnswer: "b",
    explanation: "Это СПП с придаточным условия, присоединяемым союзом 'если'.",
  },
  {
    id: 48,
    question: "Какое слово является указательным в предложении: 'Он работал там, где строили дом'?",
    options: [
      { id: "a", text: "он" },
      { id: "b", text: "работал" },
      { id: "c", text: "там" },
      { id: "d", text: "где" },
    ],
    correctAnswer: "c",
    explanation: "'Там' — указательное слово в главной части, к которому относится придаточное места.",
  },
  {
    id: 49,
    question: "В каком предложении нужна запятая перед 'и'?",
    options: [
      { id: "a", text: "Вчера шел дождь и дул ветер." },
      { id: "b", text: "Солнце светило и птицы пели." },
      { id: "c", text: "Мама готовила обед, и дети играли во дворе." },
      { id: "d", text: "Красивые и умные студенты." },
    ],
    correctAnswer: "c",
    explanation: "Запятая нужна, так как союз 'и' соединяет две части ССП с разными подлежащими.",
  },
  {
    id: 50,
    question: "Определите тип придаточного: 'Он вернулся, когда все уже спали.'",
    options: [
      { id: "a", text: "Определительное" },
      { id: "b", text: "Изъяснительное" },
      { id: "c", text: "Обстоятельственное времени" },
      { id: "d", text: "Обстоятельственное условия" },
    ],
    correctAnswer: "c",
    explanation: "Придаточное времени отвечает на вопрос 'когда?' и присоединяется союзным словом 'когда'.",
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

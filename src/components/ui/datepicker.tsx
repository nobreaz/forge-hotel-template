"use client"

import * as React from "react"
import { format } from "date-fns"
import { ptBR } from "date-fns/locale"

import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import { Field, FieldLabel } from "@/components/ui/field"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"

export function DatePickerSimple() {
  const [date, setDate] = React.useState<Date>()
  const today = React.useMemo(() => {
    const now = new Date()
    now.setHours(0, 0, 0, 0)
    return now
  }, [])

  return (
    <Field className="w-full">
      <Popover>
        <PopoverTrigger asChild>
          <Button
            variant="outline"
            id="date-picker-simple"
            className="w-full justify-start font-normal border-none bg-white p-2 text-sm text-earth-dark"
          >
            {date ? format(date, "dd/MM/yyyy", { locale: ptBR }) : <span>dd/mm/aaaa</span>}
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-auto p-0" align="start">
          <Calendar
            mode="single"
            selected={date}
            onSelect={setDate}
            defaultMonth={date ?? today}
            locale={ptBR}
            disabled={{ before: today }}
          />
        </PopoverContent>
      </Popover>
    </Field>
  )
}

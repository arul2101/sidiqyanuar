import * as React from "react"

import { cn } from "@/lib/utils"

const Card = React.forwardRef(({ className, ...props }, ref) => {
  const { fdprocessid, ...filteredProps } = props;

  return (
    <div
      ref={ref}
      className={cn(
        "rounded-xl border border-slate-200 bg-white text-slate-950 shadow dark:border-slate-800 dark:bg-slate-950 dark:text-slate-50",
        className
      )}
      {...filteredProps} />
  )
})
Card.displayName = "Card"

const CardHeader = React.forwardRef(({ className, ...props }, ref) => {
  const { fdprocessid, ...filteredProps } = props;

  return (
    <div
      ref={ref}
      className={cn("flex flex-col space-y-1.5 p-6", className)}
      {...filteredProps} />
  )
})
CardHeader.displayName = "CardHeader"

const CardTitle = React.forwardRef(({ className, ...props }, ref) => {
  const { fdprocessid, ...filteredProps } = props;

  return (
    <div
      ref={ref}
      className={cn("font-semibold leading-none tracking-tight", className)}
      {...filteredProps} />
  )
})
CardTitle.displayName = "CardTitle"

const CardDescription = React.forwardRef(({ className, ...props }, ref) => {
  const { fdprocessid, ...filteredProps } = props;

  return (
    <div
      ref={ref}
      className={cn("text-sm text-slate-500 dark:text-slate-400", className)}
      {...filteredProps} />
  )
})
CardDescription.displayName = "CardDescription"

const CardContent = React.forwardRef(({ className, ...props }, ref) => {
  const { fdprocessid, ...filteredProps } = props;

  return (
    <div ref={ref} className={cn("p-6 pt-0", className)} {...filteredProps} />
  )
})
CardContent.displayName = "CardContent"

const CardFooter = React.forwardRef(({ className, ...props }, ref) => {
  const { fdprocessid, ...filteredProps } = props;

  return (
    <div
      ref={ref}
      className={cn("flex items-center p-6 pt-0", className)}
      {...filteredProps} />
  )
})
CardFooter.displayName = "CardFooter"

export { Card, CardHeader, CardFooter, CardTitle, CardDescription, CardContent }

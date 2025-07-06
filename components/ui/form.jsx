"use client";
import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { Controller, FormProvider, useFormContext } from "react-hook-form";

import { cn } from "@/lib/utils";
import { Label } from "@/components/ui/label";

const Form = FormProvider;

const FormFieldContext = React.createContext({});

const FormField = ({ ...props }) => {
  const { fdprocessedid, ...filteredProps } = props;

  return (
    <FormFieldContext.Provider value={{ name: props.name }}>
      <Controller {...filteredProps} />
    </FormFieldContext.Provider>
  );
};

const useFormField = () => {
  const fieldContext = React.useContext(FormFieldContext);
  const itemContext = React.useContext(FormItemContext);
  const { getFieldState, formState } = useFormContext();

  const fieldState = getFieldState(fieldContext.name, formState);

  if (!fieldContext) {
    throw new Error("useFormField should be used within <FormField>");
  }

  const { id } = itemContext;

  return {
    id,
    name: fieldContext.name,
    formItemId: `${id}-form-item`,
    formDescriptionId: `${id}-form-item-description`,
    formMessageId: `${id}-form-item-message`,
    ...fieldState,
  };
};

const FormItemContext = React.createContext({});

const FormItem = React.forwardRef(({ className, ...props }, ref) => {
  const { fdprocessedid, ...filteredProps } = props;
  const id = React.useId();

  return (
    <FormItemContext.Provider value={{ id }}>
      <div ref={ref} className={cn("space-y-2", className)} {...filteredProps} />
    </FormItemContext.Provider>
  );
});
FormItem.displayName = "FormItem";

const FormLabel = React.forwardRef(({ className, ...props }, ref) => {
  const { error, formItemId } = useFormField();
  const { fdprocessedid, ...filteredProps } = props;


  return (
    <Label
      ref={ref}
      className={cn(error && "text-red-600 dark:text-red-600", className)}
      htmlFor={formItemId}
      {...filteredProps}
    />
  );
});
FormLabel.displayName = "FormLabel";

const FormControl = React.forwardRef(({ ...props }, ref) => {
  const { error, formItemId, formDescriptionId, formMessageId } =
    useFormField();
  const { fdprocessedid, ...filteredProps } = props;

  return (
    <Slot
      ref={ref}
      id={formItemId}
      aria-describedby={
        !error
          ? `${formDescriptionId}`
          : `${formDescriptionId} ${formMessageId}`
      }
      aria-invalid={!!error}
      {...filteredProps}
    />
  );
});
FormControl.displayName = "FormControl";

const FormDescription = React.forwardRef(({ className, ...props }, ref) => {
  const { formDescriptionId } = useFormField();
  const { fdprocessedid, ...filteredProps } = props;

  return (
    <p
      ref={ref}
      id={formDescriptionId}
      className={cn(
        "text-[0.8rem] text-slate-500 dark:text-slate-400",
        className
      )}
      {...filteredProps}
    />
  );
});
FormDescription.displayName = "FormDescription";

const FormMessage = React.forwardRef(
  ({ className, children, ...props }, ref) => {
    const { error, formMessageId } = useFormField();
    const body = error ? String(error?.message) : children;
    const { fdprocessedid, ...filteredProps } = props;

    if (!body) {
      return null;
    }

    return (
      <p
        ref={ref}
        id={formMessageId}
        className={cn(
          "text-[0.8rem] font-medium text-red-600 dark:text-red-600",
          className
        )}
        {...filteredProps}
      >
        {body}
      </p>
    );
  }
);
FormMessage.displayName = "FormMessage";

export {
  useFormField,
  Form,
  FormItem,
  FormLabel,
  FormControl,
  FormDescription,
  FormMessage,
  FormField,
};

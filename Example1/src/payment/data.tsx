import {
    ArrowDownIcon,
    ArrowRightIcon,
    ArrowUpIcon,
    CheckCircledIcon,
    CircleIcon,
    CrossCircledIcon,
    QuestionMarkCircledIcon,
    StopwatchIcon,
  } from "@radix-ui/react-icons"
  
  export const statuses = [
    {
      value: "pending",
      label: "pending",
      icon: QuestionMarkCircledIcon,
    },
    {
      value: "processing",
      label: "processing",
      icon: StopwatchIcon,
    },
    {
      value: "success",
      label: "success",
      icon: CheckCircledIcon,
    },
    {
      value: "failed",
      label: "failed",
      icon: CrossCircledIcon,
    },
  ]
  
  export const amounts = [
    {
      label: "Low (100)",
      value:  100,
      icon: ArrowDownIcon,
    },
    {
      label: "High (1000)",
      value: 1000,
      icon: ArrowUpIcon,
    },
  ]
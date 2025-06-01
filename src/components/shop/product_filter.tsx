"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRightLeft, X } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/accordion";
import {
  RadioGroup,
  RadioGroupItem,
} from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { filterData } from "./data";

export default function ProductFilter() {
  const [selectedFilters, setSelectedFilters] = useState<{
    [key: string]: string;
  }>(
    filterData.reduce((acc, filter) => {
      acc[filter.value] = "all";
      return acc;
    }, {} as { [key: string]: string })
  );

  const [appliedFilters, setAppliedFilters] = useState<{
    [key: string]: string;
  }>({});

  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const handleFilterChange = (filterValue: string, optionValue: string) => {
    setSelectedFilters((prev) => ({
      ...prev,
      [filterValue]: optionValue,
    }));
  };

  const resetFilter = (filterValue: string) => {
    setSelectedFilters((prev) => ({
      ...prev,
      [filterValue]: "all", 
    }));
    setAppliedFilters((prev) => ({
      ...prev,
      [filterValue]: "all", 
    }));
  };

  const handleShowProducts = () => {
    setAppliedFilters(selectedFilters);
    setIsDialogOpen(false);
  };

  const getFilterLabel = (filterValue: string, optionValue: string) => {
    const filter = filterData.find((f) => f.value === filterValue);
    const option = filter?.options.find((opt) => opt.value === optionValue);
    return option?.label || optionValue;
  };

  const activeFilters = Object.entries(selectedFilters).filter(
    ([_, value]) => value !== "all"
  );

  return (
    <div className="py-4">
      <div className="w-full h-[1px] bg-gray-400" />
      <div className="flex items-center gap-2 px-10 py-4">
        <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
          <DialogTrigger>
            <Button
              variant="outline"
              className="font-semibold cursor-pointer active:scale-90 shadow-[1px_2px_8px_rgba(0,0,0,0.3)] border-none flex items-center gap-2"
            >
              Filters <ArrowRightLeft size={16} />
            </Button>
          </DialogTrigger>
          <DialogContent className="max-w-md mx-auto py-6 px-0 rounded-3xl shadow-4xl">
            <DialogHeader>
              <DialogTitle className="text-3xl pb-5 border-b-[1px] border-black font-semibold text-center px-6">
                Product Filter
              </DialogTitle>
            </DialogHeader>
            <Accordion type="single" collapsible className="w-full mt-4 px-6">
              {filterData.map((filter) => (
                <AccordionItem key={filter.value} value={filter.value}>
                  <AccordionTrigger className="text-base font-semibold hover:scale-102 cursor-pointer">
                    {filter.name}
                  </AccordionTrigger>
                  <AccordionContent>
                    <RadioGroup
                      value={selectedFilters[filter.value]}
                      onValueChange={(value) =>
                        handleFilterChange(filter.value, value)
                      }
                    >
                      {filter.options.map((option, index) => (
                        <div
                          key={option.value}
                          className={`flex items-center space-x-2 ${
                            index < filter.options.length - 1 ? "mb-2" : ""
                          }`}
                        >
                          <RadioGroupItem
                            value={option.value}
                            id={`${filter.value}-${option.value}`}
                            className="cursor-pointer"
                          />
                          <Label htmlFor={`${filter.value}-${option.value}`}>
                            {option.label}
                          </Label>
                        </div>
                      ))}
                    </RadioGroup>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
            <div className="shadow-[0_-3px_5px_rgba(0,0,0,0.2)] w-full flex flex-col items-center justify-center">
              <Button
                onClick={handleShowProducts}
                className="w-[200px] cursor-pointer transition duration-300 active:scale-95 font-[590] mt-6 bg-black text-white hover:bg-gray-800 rounded-lg py-2"
              >
                Show Products
              </Button>
            </div>
          </DialogContent>
        </Dialog>
        <div className="flex items-center gap-2">
          {activeFilters.length > 0 ? (
            activeFilters.map(([filterValue, optionValue]) => (
              <div
                key={filterValue}
                className="flex items-center gap-2 bg-gray-100 text-sm px-3 py-1 rounded-full hover:scale-110 hover:shadow-lg"
              >
                <span>{getFilterLabel(filterValue, optionValue)}</span>
                <X
                  size={14}
                  className="cursor-pointer"
                  onClick={() => resetFilter(filterValue)}
                />
              </div>
            ))
          ) : (
            <>
            </>
          )}
        </div>
      </div>
      <div className="w-full h-[1px] bg-gray-400" />
    </div>
  );
}
"use client"

import { useState, ChangeEvent,FormEvent } from "react"
import {Card, CardHeader, CardTitle, CardDescription,CardContent} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { CloudIcon, MapPinIcon, ThermometerIcon } from "lucide-react"

interface WeatherData{
    temprature:number;
    description:string;
    location:string;
    unit:string;
}

export default function WeatherForecaste(){
    const [location, setLocation]=useState<string>("");
    const [weather, setWeather] = useState<WeatherData | null> (null);
    const [error, setError] = useState<string |null>(null);
    const [isLoading, setIsLoading] = useState<boolean>(false);

    const handleSearch = async(e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const trimmedLocation= location.trim();

        if(trimmedLocation == ""){
            setError("Please enter a valid location");
            setWeather(null);
            return;
        }
        setIsLoading(true);
        setError(null)


    }

}
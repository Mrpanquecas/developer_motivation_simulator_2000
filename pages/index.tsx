import { GetStaticProps } from "next";
import Head from "next/head";
import React, { useState } from "react";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import {
  Button,
  NumberInput,
  Slider,
  Toolbar,
  Window,
  WindowContent,
  WindowHeader,
} from "react95";
import CalculateMotivationWindow from "../components/CalculateMotivationWindow";
import TFormInput from "../interfaces/MotivationForm.type";

export default function Home() {
  const [calculateMotivation, setCalculateMotivation] = useState(false);
  const { handleSubmit, control, getValues } = useForm<TFormInput>({
    defaultValues: {
      scope: 5,
      caffeine: 0,
      deadlines: 5,
      interesting: 5,
    },
  });

  const onSubmit: SubmitHandler<TFormInput> = (data) => {
    console.log(data);
    setCalculateMotivation(true);
  };

  return (
    <div className="flex h-full w-full flex-col items-center px-10">
      <Head>
        <title>Developer motivation simulator 2000</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="flex h-full w-full flex-col items-center justify-center">
        <h1>Welcome to Developer simulator 2000.exe</h1>
        <Window>
          <WindowHeader className="flex py-4">
            <div className="flex w-full items-center justify-between">
              dev_motivation_simulator_2000.exe
              <Button className="ml-2">
                <span className="close-icon">X</span>
              </Button>
            </div>
          </WindowHeader>
          <Toolbar>
            <Button variant="menu" size="sm">
              File
            </Button>
            <Button variant="menu" size="sm">
              File
            </Button>
            <Button variant="menu" size="sm">
              File
            </Button>
          </Toolbar>
          <WindowContent>
            <form
              className="mx-6 flex flex-col"
              onSubmit={handleSubmit(onSubmit)}
            >
              <span>Is the project well scoped?</span>
              <Controller
                name="scope"
                control={control}
                render={({ field }) => (
                  <Slider
                    {...field}
                    min={0}
                    max={10}
                    step={1}
                    marks={[
                      { value: 0, label: "NO!" },
                      { value: 10, label: "YES!" },
                    ]}
                  />
                )}
              />
              <span>Is the project interesting?</span>
              <Controller
                name="interesting"
                control={control}
                render={({ field }) => (
                  <Slider
                    {...field}
                    min={0}
                    max={10}
                    step={1}
                    marks={[
                      { value: 0, label: "NO!" },
                      { value: 10, label: "YES!" },
                    ]}
                  />
                )}
              />
              <span>Are the deadlines resonable?</span>
              <Controller
                name="deadlines"
                control={control}
                render={({ field }) => (
                  <Slider
                    {...field}
                    min={0}
                    max={10}
                    step={1}
                    marks={[
                      { value: 0, label: "NO!" },
                      { value: 10, label: "YES!" },
                    ]}
                  />
                )}
              />
              <span>
                Please input your developer average daily caffeine intake
              </span>
              <Controller
                name="caffeine"
                control={control}
                render={({ field }) => (
                  <NumberInput
                    {...field}
                    className="caffeine"
                    min={0}
                    max={99}
                  />
                )}
              />
              <Button type="submit" className="mt-4">
                Calculate Developer Motivation
              </Button>
            </form>
          </WindowContent>
        </Window>
      </div>
      {calculateMotivation && <CalculateMotivationWindow data={getValues()} />}
      <footer className="flex w-full justify-center">
        <a
          href="https://potatoveloper.vercel.app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Hire me
        </a>
      </footer>
    </div>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  return { props: {} };
};

import Image from "next/image";
import React, { Fragment, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";

const Residence = () => {
  const [isModelOpen, setIsModelOpen] = useState(false);
  const [link, setLink] = useState("");

  const openModal = (link: string) => {
    setIsModelOpen(true);
    setLink(link);
  };

  const closeModal = () => {
    setIsModelOpen(false);
    setLink("");
  };

  return (
    <div>
      <div
        className="w-auto hover:scale-105 cursor-pointer duration-150 relative mb-4 before:content-[''] before:absolute before:inset-0 before:bg-black before:bg-opacity-20"
        onClick={() =>
          openModal(
            "/assets/img/WebP Project Photos MFG/RESIDENCE DES PINS/IMG_0700.webp"
          )
        }
      >
        <Image
          alt="random"
          width={700}
          height={500}
          className="w-full"
          src={
            "/assets/img/WebP Project Photos MFG/RESIDENCE DES PINS/IMG_0700.webp"
          }
        ></Image>
      </div>

      <div
        className="w-auto hover:scale-105 cursor-pointer duration-150 relative mb-4 before:content-[''] before:absolute before:inset-0 before:bg-black before:bg-opacity-20"
        onClick={() =>
          openModal(
            "/assets/img/WebP Project Photos MFG/RESIDENCE DES PINS/IMG_0705.webp"
          )
        }
      >
        <Image
          alt="random"
          width={700}
          height={500}
          className="w-full"
          src={
            "/assets/img/WebP Project Photos MFG/RESIDENCE DES PINS/IMG_0705.webp"
          }
        ></Image>
      </div>

      <div
        className="w-auto hover:scale-105 cursor-pointer duration-150 relative mb-4 before:content-[''] before:absolute before:inset-0 before:bg-black before:bg-opacity-20"
        onClick={() =>
          openModal(
            "/assets/img/WebP Project Photos MFG/RESIDENCE DES PINS/IMG_0711.webp"
          )
        }
      >
        <Image
          alt="random"
          width={700}
          height={500}
          className="w-full"
          src={
            "/assets/img/WebP Project Photos MFG/RESIDENCE DES PINS/IMG_0711.webp"
          }
        ></Image>
      </div>

      <div
        className="w-auto hover:scale-105 cursor-pointer duration-150 relative mb-4 before:content-[''] before:absolute before:inset-0 before:bg-black before:bg-opacity-20"
        onClick={() =>
          openModal(
            "/assets/img/WebP Project Photos MFG/RESIDENCE DES PINS/IMG_0713.webp"
          )
        }
      >
        <Image
          alt="random"
          width={700}
          height={500}
          className="w-full"
          src={
            "/assets/img/WebP Project Photos MFG/RESIDENCE DES PINS/IMG_0713.webp"
          }
        ></Image>
      </div>

      <div
        className="w-auto hover:scale-105 cursor-pointer duration-150 relative mb-4 before:content-[''] before:absolute before:inset-0 before:bg-black before:bg-opacity-20"
        onClick={() =>
          openModal(
            "/assets/img/WebP Project Photos MFG/RESIDENCE DES PINS/IMG_0714.webp"
          )
        }
      >
        <Image
          alt="random"
          width={700}
          height={500}
          className="w-full"
          src={
            "/assets/img/WebP Project Photos MFG/RESIDENCE DES PINS/IMG_0714.webp"
          }
        ></Image>
      </div>

      <div
        className="w-auto hover:scale-105 cursor-pointer duration-150 relative mb-4 before:content-[''] before:absolute before:inset-0 before:bg-black before:bg-opacity-20"
        onClick={() =>
          openModal(
            "/assets/img/WebP Project Photos MFG/RESIDENCE DES PINS/IMG_8738.webp"
          )
        }
      >
        <Image
          alt="random"
          width={700}
          height={500}
          className="w-full"
          src={
            "/assets/img/WebP Project Photos MFG/RESIDENCE DES PINS/IMG_8738.webp"
          }
        ></Image>
      </div>

      <div
        className="w-auto hover:scale-105 cursor-pointer duration-150 relative mb-4 before:content-[''] before:absolute before:inset-0 before:bg-black before:bg-opacity-20"
        onClick={() =>
          openModal(
            "/assets/img/WebP Project Photos MFG/RESIDENCE DES PINS/IMG_8739.webp"
          )
        }
      >
        <Image
          alt="random"
          width={700}
          height={500}
          className="w-full"
          src={
            "/assets/img/WebP Project Photos MFG/RESIDENCE DES PINS/IMG_8739.webp"
          }
        ></Image>
      </div>

      <div
        className="w-auto hover:scale-105 cursor-pointer duration-150 relative mb-4 before:content-[''] before:absolute before:inset-0 before:bg-black before:bg-opacity-20"
        onClick={() =>
          openModal(
            "/assets/img/WebP Project Photos MFG/RESIDENCE DES PINS/IMG_8744.webp"
          )
        }
      >
        <Image
          alt="random"
          width={700}
          height={500}
          className="w-full"
          src={
            "/assets/img/WebP Project Photos MFG/RESIDENCE DES PINS/IMG_8744.webp"
          }
        ></Image>
      </div>

      <Transition appear show={isModelOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-backdropBlurColor backdrop-blur-sm" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-1/5 transform overflow-hidden rounded-lg bg-tableBodyColor align-middle shadow-xl transition-all scale-150">
                  <Image
                    alt="random"
                    width={700}
                    height={500}
                    className="w-auto"
                    src={link}
                  ></Image>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </div>
  );
};

export default Residence;

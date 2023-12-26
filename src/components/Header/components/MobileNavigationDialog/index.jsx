import * as Dialog from "@radix-ui/react-dialog";
import { useState } from "react";
import { IoMdCloseCircleOutline } from "react-icons/io";

import { RxHamburgerMenu } from "react-icons/rx";

export function MobileNavigationDialog({ navItems }) {
  const [open, setOpen] = useState(false);

  const logo = navItems[0].logo;

  const scrollToForm = (id) => {
    document.getElementById(id).scrollIntoView();
  };

  return (
    <>
      <RxHamburgerMenu
        size={30}
        className="cursor-pointer"
        onClick={() => setOpen(true)}
      />
      <Dialog.Root open={open} onOpenChange={() => setOpen(false)}>
        <Dialog.Portal>
          <Dialog.Overlay
            className="fixed  inset-0 z-50 bg-[rgba(0,_0,_0,_0.2)] 
        data-[state=open]:animate-overlayShow"
          />
          <Dialog.Content className="fixed right-0 top-[50%] z-50 h-screen w-full max-w-[600px] translate-y-[-50%] bg-stone-500 p-[20px] shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] focus:outline-none data-[state=open]:animate-contentShow">
            <Dialog.Title className="text-[17px] pt-7 font-medium">
              <div className="flex justify-between  font-bold border-b-2">
                <span className="flex w-full text-2xl text-secondary  pb-[10px] justify-start">
                  <img
                    className="w-[100px] mb-2 ml-2"
                    alt="logo da página"
                    src={logo.logo}
                  />
                </span>
                <IoMdCloseCircleOutline
                  onClick={() => setOpen(false)}
                  className="text-white cursor-pointer"
                  size={30}
                />
              </div>
            </Dialog.Title>
            <div className="mt-3 text-white h-[85%]">
              {navItems.map((itemBlok) => (
                <>
                  {!itemBlok?.img && (
                    <div
                      onClick={() => scrollToForm(itemBlok.id)}
                      className="hover:text-[#F4D779] cursor-pointer text-left ml-[15px] text-[20px] mb-2 font-bold font-['Montserrat'] "
                    >
                      {itemBlok?.name}
                    </div>
                  )}
                </>
              ))}
            </div>
          </Dialog.Content>
        </Dialog.Portal>
      </Dialog.Root>
    </>
  );
}

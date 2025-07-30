// global-setup.js
import { chromium } from "@playwright/test";
import fs from "fs";

export default async function globalSetup(config) {
  const browser = await chromium.launch();
  const page = await browser.newPage();

  // 👉 Cambia esta URL por la de tu sistema de login
  await page.goto("https://tu-sistema.com/login");

  // 👉 Simula login (ajusta los selectores según tu caso)
  await page.fill("#username", "tu_usuario");
  await page.fill("#password", "tu_contraseña");
  await page.click('button[type="submit"]');

  // Espera a que estés logueada (por ejemplo, esperar a que cargue el dashboard)
  await page.waitForURL("**/dashboard");

  // Guarda el estado de la sesión (cookies, localStorage, etc.)
  await page.context().storageState({ path: "storageState.json" });

  await browser.close();
}

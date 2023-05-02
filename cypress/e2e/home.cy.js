/// <reference types="cypress" />

import search from "../support/pages/search"

describe('Health Check', () => {
  it('Acessar o site e validar o título da página', () => {
    search.validarTitulo();
  })
})
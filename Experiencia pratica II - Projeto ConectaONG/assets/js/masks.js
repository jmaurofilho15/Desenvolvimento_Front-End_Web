/*
 * assets/js/masks.js
 * Script para aplicar máscaras de input no formulário de cadastro.
 * Isso é uma funcionalidade de JavaScript, não HTML nativo.
 */

// Garante que o script rode apenas após o carregamento do DOM
document.addEventListener('DOMContentLoaded', () => {

    const cpfInput = document.getElementById('cpf');
    const telInput = document.getElementById('telefone');
    const cepInput = document.getElementById('cep');

    // Função genérica para aplicar máscara
    const applyMask = (element, maskFunction) => {
        if (element) {
            element.addEventListener('keyup', (e) => {
                e.target.value = maskFunction(e.target.value);
            });
        }
    };

    // Função de máscara para CPF (000.000.000-00)
    const cpfMask = (value) => {
        return value
            .replace(/\D/g, '') // Remove tudo que não é dígito
            .replace(/(\d{3})(\d)/, '$1.$2') // Coloca ponto após o terceiro dígito
            .replace(/(\d{3})(\d)/, '$1.$2') // Coloca ponto após o sexto dígito
            .replace(/(\d{3})(\d{1,2})$/, '$1-$2') // Coloca hífen antes dos últimos 2 dígitos
            .slice(0, 14); // Limita o tamanho
    };

    // Função de máscara para Telefone (00) 00000-0000
    const telMask = (value) => {
        return value
            .replace(/\D/g, '')
            .replace(/(\d{2})(\d)/, '($1) $2') // Coloca parênteses nos dois primeiros dígitos
            .replace(/(\d{5})(\d)/, '$1-$2') // Coloca hífen após o quinto dígito (para celular)
            .slice(0, 15); // Limita o tamanho
    };

    // Função de máscara para CEP (00000-000)
    const cepMask = (value) => {
        return value
            .replace(/\D/g, '')
            .replace(/(\d{5})(\d)/, '$1-$2') // Coloca hífen após o quinto dígito
            .slice(0, 9); // Limita o tamanho
    };

    // Aplica as máscaras
    applyMask(cpfInput, cpfMask);
    applyMask(telInput, telMask);
    applyMask(cepInput, cepMask);

});
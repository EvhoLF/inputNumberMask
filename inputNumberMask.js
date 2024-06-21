function formatPhoneNumber(event) {
    event.target.setAttribute('maxlength', '18');
    const input = event.target.value.replace(/\D/g, '').replace(/^7/, '');
    const formatted = input.replace(/(\d{0,3})(\d{0,3})(\d{0,2})(\d{0,2})/,
        (_, p1="", p2="", p3="", p4="") => `+7 (${p1}) ${p2} ${p3} ${p4}`.trim()
    );
    event.target.value = formatted;
}

const phoneInput = document.querySelector('input[type="tel"]');
phoneInput.addEventListener('input', formatPhoneNumber);
phoneInput.addEventListener('focus', e => { if (!e.target.value) e.target.value = '+7'; });

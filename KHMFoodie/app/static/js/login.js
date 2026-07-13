// Password toggle
document.querySelectorAll('button').forEach(btn => {
    btn.addEventListener('click', (e) => {
        const span = btn.querySelector('.material-symbols-outlined');
        if (span && span.innerText === 'visibility') {
            span.innerText = 'visibility_off';
            const input = btn.previousElementSibling;
            if (input) input.type = 'text';
        } else if (span && span.innerText === 'visibility_off') {
            span.innerText = 'visibility';
            const input = btn.previousElementSibling;
            if (input) input.type = 'password';
        }
    });
});

// Login form submission — call API
document.querySelector('form').addEventListener('submit', async (e) => {
    e.preventDefault();
    const btn = e.target.querySelector('button[type="submit"]');
    const username = document.getElementById('identity').value.trim();
    const password = document.getElementById('password').value.trim();
    const remember = document.querySelector('input[type="checkbox"]')?.checked || false;

    if (!username || !password) {
        alert('Vui lòng nhập username và mật khẩu');
        return;
    }

    const originalText = btn.innerText;
    btn.innerHTML = '<span class="material-symbols-outlined animate-spin">progress_activity</span>';
    btn.disabled = true;

    try {
        const res = await fetch('/api/auth/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ username, password, remember })
        });

        const data = await res.json();

        if (res.ok) {
            window.location.href = '/';
        } else {
            alert(data.message || 'Đăng nhập thất bại');
        }
    } catch (err) {
        alert('Lỗi kết nối đến máy chủ');
    } finally {
        btn.innerText = originalText;
        btn.disabled = false;
    }
});

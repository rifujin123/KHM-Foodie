// Admin: duyệt nhà hàng
(function () {
    const API_LIST = "/api/admin/restaurants?status=pending&page=";
    const API_APPROVE = (id) => `/api/admin/restaurants/${id}/approve`;
    const API_REJECT = (id) => `/api/admin/restaurants/${id}/reject`;

    const tbody = document.getElementById("pending-tbody");
    const paginationEl = document.getElementById("pagination");
    const rangeEl = document.getElementById("pagination-range");
    const totalEl = document.getElementById("pagination-total");

    let currentPage = 1;

    function formatDate(iso) {
        if (!iso) return "-";
        const d = new Date(iso);
        const pad = (n) => String(n).padStart(2, "0");
        return `${pad(d.getDate())}/${pad(d.getMonth() + 1)}/${d.getFullYear()} ${pad(d.getHours())}:${pad(d.getMinutes())}`;
    }

    function escapeHtml(s) {
        if (s == null) return "";
        return String(s)
            .replace(/&/g, "&amp;")
            .replace(/</g, "&lt;")
            .replace(/>/g, "&gt;")
            .replace(/"/g, "&quot;")
            .replace(/'/g, "&#39;");
    }

    function renderRow(r) {
        const owner = r.owner || {};
        const cover = r.cover_image || owner.avatar || "https://via.placeholder.com/40";
        return `
        <tr class="hover:bg-surface-container-lowest transition-colors group" data-row-id="${r.id}">
            <td class="px-md py-4">
                <div class="flex items-center gap-sm">
                    <div class="w-10 h-10 rounded-lg overflow-hidden bg-surface-container">
                        <img class="w-full h-full object-cover" src="${escapeHtml(cover)}" alt="${escapeHtml(r.name)}"/>
                    </div>
                    <div>
                        <p class="font-headline-md text-on-surface text-[15px]">${escapeHtml(r.name)}</p>
                        <p class="text-caption text-secondary">${escapeHtml(owner.address || "-")}</p>
                    </div>
                </div>
            </td>
            <td class="px-md py-4 font-body-md text-on-surface">${escapeHtml(owner.name || "-")}</td>
            <td class="px-md py-4 font-body-md text-secondary">${formatDate(r.created_at)}</td>
            <td class="px-md py-4">
                <span class="px-3 py-1 bg-tertiary-fixed text-on-tertiary-fixed-variant rounded-full text-caption font-bold flex items-center w-fit gap-1">
                    <span class="w-1.5 h-1.5 rounded-full bg-tertiary"></span>
                    Pending
                </span>
            </td>
            <td class="px-md py-4">
                <div class="flex items-center justify-end gap-2">
                    <button class="w-9 h-9 flex items-center justify-center rounded-lg bg-surface-container-low text-secondary hover:bg-secondary-container hover:text-on-secondary-container transition-all active:scale-90" title="Xem chi tiết">
                        <span class="material-symbols-outlined text-[20px]">visibility</span>
                    </button>
                    <button data-action="approve" data-id="${r.id}" class="w-9 h-9 flex items-center justify-center rounded-lg bg-primary-fixed text-primary hover:bg-primary-container hover:text-white transition-all active:scale-90" title="Duyệt">
                        <span class="material-symbols-outlined text-[20px]">check</span>
                    </button>
                    <button data-action="reject" data-id="${r.id}" class="w-9 h-9 flex items-center justify-center rounded-lg bg-error-container text-error hover:bg-error hover:text-white transition-all active:scale-90" title="Từ chối">
                        <span class="material-symbols-outlined text-[20px]">close</span>
                    </button>
                </div>
            </td>
        </tr>
        `;
    }

    function renderEmpty() {
        return `<tr><td colspan="5" class="px-md py-8 text-center text-secondary">Không có nhà hàng nào chờ duyệt.</td></tr>`;
    }

    function renderPagination(data) {
        const { page, pages, total, per_page } = data;
        if (rangeEl) {
            const start = total === 0 ? 0 : (page - 1) * per_page + 1;
            const end = Math.min(page * per_page, total);
            rangeEl.textContent = `${start}-${end}`;
        }
        if (totalEl) totalEl.textContent = total;

        if (!paginationEl) return;
        paginationEl.innerHTML = "";

        const prevDisabled = page <= 1;
        const nextDisabled = page >= pages;

        const prev = document.createElement("button");
        prev.className = "p-2 rounded-lg border border-outline-variant bg-white text-secondary hover:bg-surface-container transition-colors disabled:opacity-50";
        prev.disabled = prevDisabled;
        prev.innerHTML = `<span class="material-symbols-outlined">chevron_left</span>`;
        prev.onclick = () => loadPage(page - 1);
        paginationEl.appendChild(prev);

        const totalPages = Math.max(pages, 1);
        for (let i = 1; i <= totalPages; i++) {
            const btn = document.createElement("button");
            if (i === page) {
                btn.className = "w-8 h-8 rounded-lg bg-primary text-white font-bold text-caption";
            } else {
                btn.className = "w-8 h-8 rounded-lg text-secondary font-bold text-caption hover:bg-surface-container transition-colors";
            }
            btn.textContent = i;
            btn.onclick = () => loadPage(i);
            paginationEl.appendChild(btn);
        }

        const next = document.createElement("button");
        next.className = "p-2 rounded-lg border border-outline-variant bg-white text-secondary hover:bg-surface-container transition-colors disabled:opacity-50";
        next.disabled = nextDisabled;
        next.innerHTML = `<span class="material-symbols-outlined">chevron_right</span>`;
        next.onclick = () => loadPage(page + 1);
        paginationEl.appendChild(next);
    }

    async function loadPage(page) {
        if (page < 1) return;
        currentPage = page;
        try {
            const res = await fetch(API_LIST + page);
            const data = await res.json();
            if (!tbody) return;

            if (!data.items || data.items.length === 0) {
                tbody.innerHTML = renderEmpty();
            } else {
                tbody.innerHTML = data.items.map(renderRow).join("");
            }
            renderPagination(data);
        } catch (err) {
            console.error("Load pending restaurants failed:", err);
            if (tbody) tbody.innerHTML = `<tr><td colspan="5" class="px-md py-8 text-center text-error">Lỗi tải dữ liệu.</td></tr>`;
        }
    }

    async function patchAction(id, kind) {
        const url = kind === "approve" ? API_APPROVE(id) : API_REJECT(id);
        const res = await fetch(url, { method: "PATCH", headers: { "Content-Type": "application/json" } });
        return res.json();
    }

    // Delegate approve/reject clicks
    document.addEventListener("click", async (e) => {
        const btn = e.target.closest("button[data-action]");
        if (!btn) return;
        const id = btn.dataset.id;
        const action = btn.dataset.action;
        const label = action === "approve" ? "duyệt" : "từ chối";
        if (!confirm(`Xác nhận ${label} nhà hàng #${id}?`)) return;

        btn.disabled = true;
        try {
            const data = await patchAction(id, action);
            if (data.success) {
                loadPage(currentPage);
            } else {
                alert(data.message || "Thao tác thất bại.");
                btn.disabled = false;
            }
        } catch (err) {
            console.error(err);
            alert("Lỗi mạng.");
            btn.disabled = false;
        }
    });

    document.addEventListener("DOMContentLoaded", () => loadPage(1));
})();

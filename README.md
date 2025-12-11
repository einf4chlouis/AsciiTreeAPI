
# 🌲 API-Webtech: ASCII-Baum Generator

> **Eine moderne Node.js-API, die wunderschöne ASCII-Bäume generiert – flexibel, schnell & cloud-ready!**

---

## ✨ Features

• REST-API mit Express
• Flexible Parameter für Höhe & Breite
• Komprimierte Auslieferung (gzip, optional)
• Sicher (Helmet), CORS-fähig
• Bereit für Cloudflare Tunnel & Public Web

---

## 🚀 API-Endpunkt

**POST** [`https://tree.louisfriedrich.de/v1/tree`](https://tree.louisfriedrich.de/v1/tree)

### 📦 Request-Body (JSON)

```json
{
  "height": 5000,
  "width": 11111
}
```

---

## 🛠️ Beispielaufruf mit cURL

```sh
curl -X POST https://tree.louisfriedrich.de/v1/tree \
  -H "Content-Type: application/json" \
  -d '{"height":5000,"width":11111}'
```



---

## 📊 Komprimierungs-Statistik

Für 300 Requests mit `height: 5000` und `width: 11111`:

<img width="480" height="289" alt="image" src="https://github.com/user-attachments/assets/8bc3babc-b474-48ce-9bd5-b5eeeaf39a8f" />


---

## 🌳 Beispielantwort

```text
   *
  ***
 *****
*******
  |||
...
```

---

## ℹ️ Hinweise

- Die API gibt den ASCII-Baum als reinen Text zurück.

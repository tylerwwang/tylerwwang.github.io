---
layout: home
permalink: /
image:
    scale:
        - source: "assets/images/hero/hero-1080.webp"
          min: "1080px"
          max: "1440px"
        - source: "assets/images/hero/hero-720.webp"
          min: "720px"
          max: "1080px"
    base: "assets/youtube-logo.webp"
---
# Welcome 

{% highlight c %}
#include <stdint.h>

#include "idt/idt.h"
#include "pch.h"

void testInt() {
        const char* string1 = "OUI OUI\n";

        CONSOLE_print(string1, CONSOLE_BLUE_ON_BLACK, CONSOLE_FALSE);
        const char* string = "NON NON\n";
        for (int a = 0; a < 23; a++)
                CONSOLE_print(string, CONSOLE_RED_ON_BLACK, CONSOLE_FALSE);

        string = "HELLO\n";
        CONSOLE_print(string, CONSOLE_ORANGE_ON_BLACK, CONSOLE_FALSE);

        string = ":):):):):):):)\n";
        CONSOLE_print(string, CONSOLE_BLUE_ON_BLACK, CONSOLE_FALSE);

        string = ";););););););)\n";
        CONSOLE_print(string, CONSOLE_MAGENTA_ON_BLACK, CONSOLE_FALSE);

        string = "WONDERFUL\n";
        CONSOLE_print(string, CONSOLE_MAGENTA_ON_BLACK, CONSOLE_FALSE);
}

void entry() {
        CONSOLE_resetScreen(CONSOLE_BLACK_BACK);
        const char* string = "Working\n";
        CONSOLE_print(string, CONSOLE_MAGENTA_ON_BLACK, CONSOLE_FALSE);

        IDT_OFFSET function = (IDT_OFFSET)((uint64_t)testInt);

        IDT_clearTable();
        IDT_addGate((IDT_OFFSET)((uint64_t)testInt), GDT_CODE, IDT_DPL_0, IDT_INTERUPT_GATE, 0x1);
        IDT_generateTable();
}
{% endhighlight %}

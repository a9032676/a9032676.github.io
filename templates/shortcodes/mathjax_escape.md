{%- for sect in body | split(pat="$$") -%}
    {%- if loop.index % 2 == 0 -%}
        $${{ sect | replace(from="\\", to="\\\\") | replace(from="_", to="\_") | replace(from="*", to="\*") | linebreaksbr | safe }}$$
    {%- else -%}
        {%- for subsect in sect | split(pat="$") -%}
            {%- if loop.index % 2 == 0 -%}
                ${{ subsect | replace(from="\\", to="\\\\") | replace(from="_", to="\_") | replace(from="*", to="\*") | linebreaksbr | safe }}$
            {%- else -%}
                {{ subsect | safe }}
            {%- endif -%}
        {%- endfor -%}
    {%- endif -%}
{%- endfor -%}
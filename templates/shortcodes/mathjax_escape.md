{%- for sect in body | split(pat="$$") -%}
    {%- if loop.index % 2 == 0 -%}
        $${%- for line in sect | split(pat="\n") -%}
            {%- if line is starting_with(">") -%}
                {{ line | trim_start_matches(pat=">") | replace(from="\\", to="\\\\") | replace(from="_", to="\_") | replace(from="*", to="\*") | replace(from="{", to="\{") | replace(from="}", to="\}") | safe }}
            {%- else -%}
                {{ line | replace(from="\\", to="\\\\") | replace(from="_", to="\_") | replace(from="*", to="\*") | replace(from="{", to="\{") | replace(from="}", to="\}") | safe }}<br>
            {%- endif -%}
        {%- endfor -%}$$
    {%- else -%}
        {%- for subsect in sect | split(pat="$") -%}
            {%- if loop.index % 2 == 0 -%}
                ${{ subsect | replace(from="\\", to="\\\\") | replace(from="_", to="\_") | replace(from="*", to="\*") | replace(from="{", to="\{") | replace(from="}", to="\}") | linebreaksbr | safe }}$
            {%- else -%}
                {{ subsect | safe }}
            {%- endif -%}
        {%- endfor -%}
    {%- endif -%}
{%- endfor -%}
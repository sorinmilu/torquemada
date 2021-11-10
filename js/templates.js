
var QUESTION_number = `<div class="questioncontainer">
    <% if (locals.showvar) { %>
        <div class="questionvar">
            <% if (locals.multivariable) { %>
                <%= variables_prefix %>            
            <% } else { %>
                <%= variable %>
            <% } %>                
        </div>     
    <% } %>

    <div class="questiontexts" <%if (locals.textwidth) { %> style="width:<%= textwidth %>;" <% } %>>
        <% if (locals.pretext) { %>
            <div class="question_postext"><%= pretext %></div>
        <% } %>
        <div class="question_text"><%= text %></div>
        <% if (locals.postext) { %>
            <div class="question_postext"><%= postext %></div>
        <% } %>
    </div>
    <div class="question_answers">
        <input type="text" class="varanswer" data-var="<%= variable %>" data-vtype="<%= type %>"  id="<%=variable%>" name="<%=variable%>">
    </div>
</div>
`;

var QUESTION_SIDE_number = `<div class="questioncontainer_side"  >
    <% if (locals.showvar) { %>
        <div class="questionvar">
            <% if (locals.multivariable) { %>
                <%= variables_prefix %>            
            <% } else { %>
                <%= variable %>
            <% } %>                
        </div>     
    <% } %>

    <div class="questiontexts_side" <%if (locals.textwidth) { %> style="width:<%= textwidth %>;" <% } %>>
        <% if (locals.pretext) { %>
            <div class="question_postext"><%= pretext %></div>
        <% } %>
        <div class="question_text"><%= text %></div>
        <% if (locals.postext) { %>
            <div class="question_postext"><%= postext %></div>
        <% } %>
    </div>
    <div class="question_answers_side">
        <input type="text" class="varanswer" data-var="<%=variable%>" data-vtype="<%= type %>"  id="<%=variable%>" name="<%=variable%>">
    </div>
</div>
`;


var QUESTION_SIDE_radio = `<div class="questioncontainer_side"  >
    <% if (locals.showvar) { %>
        <div class="questionvar">
            <% if (locals.multivariable) { %>
                <%= variables_prefix %>            
            <% } else { %>
                <%= variable %>
            <% } %>                
        </div>     
    <% } %>

    <div class="questiontexts_side" <%if (locals.textwidth) { %> style="width:<%= textwidth %>;" <% } %>>
        <% if (locals.pretext) { %>
            <div class="question_postext"><%= pretext %></div>
        <% } %>
        <div class="question_text"><%= text %></div>
        <% if (locals.postext) { %>
            <div class="question_postext"><%= postext %></div>
        <% } %>
    </div>
    <div class="question_answers_side">
        <div class="radio_answergroup varanswer" data-var="<%=variable%>" data-vtype="<%= type %>" <%if (locals.elementwidth) { %> style="width:<%= elementwidth %>;" <% } %> >
        <% for(const key in values) { %> 
                <input type="radio" id="<%=variable%>-<%=key%>" name="<%=variable%>" value="<%= key %>">
                <% if (locals.showlabels) { %>
                    <label for ="<%=variable%>-<%=key%>"><%=values[key]%></label>
                <% } %>
        <% } %>
        </div>
    </div>
</div>
`;

var QUESTION_date = `<div class="questioncontainer">
    <% if (locals.showvar) { %>
        <div class="questionvar">
            <% if (locals.multivariable) { %>
                <%= variables_prefix %>            
            <% } else { %>
                <%= variable %>
            <% } %>                
        </div>     
    <% } %>

    <div class="questiontexts" <%if (locals.textwidth) { %> style="width:<%= textwidth %>;" <% } %>>
        <% if (locals.pretext) { %>
            <div class="question_postext"><%= pretext %></div>
        <% } %>
        <div class="question_text"><%= text %></div>
        <% if (locals.postext) { %>
            <div class="question_postext"><%= postext %></div>
        <% } %>
    </div>

    <div class="question_answers">
        <input type="date" class="varanswer" data-var="<%=variable%>" data-vtype="<%= type %>"  id="<%=variable%>" name="<%=variable%>">
    </div>
`;

var QUESTION_SIDE_date = `<div class="questioncontainer_side" >
    <% if (locals.showvar) { %>
        <div class="questionvar">
            <% if (locals.multivariable) { %>
                <%= variables_prefix %>            
            <% } else { %>
                <%= variable %>
            <% } %>                
        </div>     
    <% } %>

    <div class="questiontexts_side" <%if (locals.textwidth) { %> style="width:<%= textwidth %>;" <% } %>>
        <% if (locals.pretext) { %>
            <div class="question_postext"><%= pretext %></div>
        <% } %>
        <div class="question_text"><%= text %></div>
        <% if (locals.postext) { %>
            <div class="question_postext"><%= postext %></div>
        <% } %>
    </div>

    <div class="question_answers_side">
        <input type="date" class="varanswer" data-var="<%=variable%>" data-vtype="<%= type %>"   id="<%=variable%>" name="<%=variable%>">
    </div>
`;



var QUESTION_radio = '<div class="questioncontainer"><b>Radio: {{ text }}</b></div>';
var QUESTION_checkbox = '<div class="questioncontainer"><b>Radio: {{ text }}</b></div>';


var MULTIQUESTION_date = `<div class="multiquestioncontainer">
    <% if (locals.showvar) { %>
        <div class="questionvar">
            <% if (locals.multivariable) { %>
                <%= variables_prefix %>            
            <% } else { %>
                <%= variable %>
            <% } %>                
        </div>     
    <% } %>

    <div class="questiontexts">
        <% if (locals.pretext) { %>
            <div class="question_postext"><%= pretext %></div>
        <% } %>
        <div class="question_text"><%= text %></div>
        <% if (locals.postext) { %>
            <div class="question_postext"><%= postext %></div>
        <% } %>
    </div>
    <div class="question_answers">
        <div class="date_group">
         <% for(var i = 0; i < variables.length; i++) { %>
            <div class="date_answergroup" <%if (locals.elementwidth) { %> style="width:<%= elementwidth %>;" <% } %> >
                    <input type="date" class="varanswer" data-var="<%=variables[i]%>" data-vtype="<%= type %>"  id="<%=variables[i]%>" name="<%=variables[i]%>">
                    <% if (locals.showlabels) { %>
                        <label for ="<%=variables[i]%>"><%=variables[i]%></label>
                    <% } %>           
            </div>
         <% } %>
         </div>
     </div>`;

var MULTIQUESTION_SIDE_date = `<div class="multiquestioncontainer_side">
    <% if (locals.showvar) { %>
        <div class="questionvar">
            <% if (locals.multivariable) { %>
                <%= variables_prefix %>            
            <% } else { %>
                <%= variable %>
            <% } %>                
        </div>     
    <% } %>

    <div class="questiontexts_side" <%if (locals.textwidth) { %> style="width:<%= textwidth %>;" <% } %> >
    <% if (locals.pretext) { %>
        <div class="question_postext"><%= pretext %></div>
    <% } %>
    <div class="question_text"><%= text %></div>
    <% if (locals.postext) { %>
        <div class="question_postext"><%= postext %></div>
    <% } %>
    </div>
    <div class="question_answers_side">

    <div class="date_group">
        <% for(var i = 1; i < variables_count+1; i++) { %>
        <div class="date_answergroup" <%if (locals.elementwidth) { %> style="width:<%= elementwidth %>;" <% } %> >
                <input type="date" class="varanswer" data-var="<%=variables_prefix +i%>" data-vtype="<%= type %>"  id="<%=variables_prefix + i%>" name="<%=variables_prefix + i%>">
                <% if (locals.showlabels) { %>
                    <label for ="<%=variables_prefix + i%>"><%=variables_prefix +i%></label>
                <% } %>           
        </div>
     <% } %>
    </div>
     </div>`;


var MULTIQUESTION_number = `<div class="multiquestioncontainer">
    <% if (locals.showvar) { %>
        <div class="questionvar">
            <% if (locals.multivariable) { %>
                <%= variables_prefix %>            
            <% } else { %>
                <%= variable %>
            <% } %>                
        </div>     
    <% } %>

    <div class="questiontexts">
        <% if (locals.pretext) { %>
            <div class="question_postext"><%= pretext %></div>
        <% } %>
        <div class="question_text"><%= text %></div>
        <% if (locals.postext) { %>
            <div class="question_postext"><%= postext %></div>
        <% } %>
    </div>
    <div class="question_answers">
    <div class="number_group">
     <% for(var i = 0; i < variables.length; i++) { %>
        <div class="number_answergroup" <%if (locals.elementwidth) { %> style="width:<%= elementwidth %>;" <% } %> >
                <input type="text" class="varanswer" data-var="<%=variables[i]%>" data-vtype="<%= type %>"  class="number_input" id="<%=variables[i]%>" name="<%=variables[i]%>">
                <% if (locals.showlabels) { %>
                    <label for ="<%=variables[i]%>"><%=variables[i]%></label>
                <% } %>           
        </div>
     <% } %>
     </div>
     </div>`;

var MULTIQUESTION_SIDE_number = `<div class="multiquestioncontainer_side">
    <% if (locals.showvar) { %>
        <div class="questionvar">
            <% if (locals.multivariable) { %>
                <%= variables_prefix %>            
            <% } else { %>
                <%= variable %>
            <% } %>                
        </div>     
    <% } %>

    <div class="questiontexts_side" <%if (locals.textwidth) { %> style="width:<%= textwidth %>;" <% } %> >
    <% if (locals.pretext) { %>
        <div class="question_postext"><%= pretext %></div>
    <% } %>
    <div class="question_text"><%= text %></div>
    <% if (locals.postext) { %>
        <div class="question_postext"><%= postext %></div>
    <% } %>
    </div>
    <div class="question_answers_side">
        <div class="number_group">
        <% for(var i = 1; i < variables_count+1; i++) { %>
            <div class="number_answergroup" <%if (locals.elementwidth) { %> style="width:<%= elementwidth %>;" <% } %> >
                    <input type="text" class="varanswer" data-var="<%=variables_prefix + i%>" data-vtype="<%= type %>"  class="number_input" id="<%=variables_prefix + i%>" name="<%=variables_prefix + i%>">
                    <% if (locals.showlabels) { %>
                        <label for ="<%=variables[i]%>"><%=variables_prefix + i%></label>
                    <% } %>           
            </div>
         <% } %>
         </div>
     </div>
`;


var MULTIQUESTION_radio = `<div class="multiquestioncontainer">
    <div class="questiontexts">
        <% if (locals.pretext) { %>
            <div class="question_postext"><%= pretext %></div>
        <% } %>
        <div class="question_text"><%= text %></div>
        <% if (locals.postext) { %>
            <div class="question_postext"><%= postext %></div>
        <% } %>
    </div>
    <div class="radio_group">
     <% for(var i = 0; i < variables.length; i++) { %>
        <div class="radio_answergroup varanswer" data-var="<%=variables[i]%>" data-vtype="<%= type %>" <%if (locals.elementwidth) { %> style="width:<%= elementwidth %>;" <% } %> >
        <% for(const key in values) { %> 
                <input type="radio" id="<%=variables[i]%>-<%=key%>" name="<%=variables[i]%>" value="<%= key %>">
                <% if (locals.showlabels) { %>
                    <label for ="<%=variables[i]%>-<%=key%>"><%=values[key]%></label>
                <% } %>
        <% } %>
        </div>
     <% } %>
     </div>
`;

var MULTIQUESTION_SIDE_radio = `<div class="multiquestioncontainer_side">
    <% if (locals.showvar) { %>
        <div class="questionvar">
            <% if (locals.multivariable) { %>
                <%= variables_prefix %>            
            <% } else { %>
                <%= variable %>
            <% } %>                
        </div>     
    <% } %>

    <div class="questiontexts_side" <%if (locals.textwidth) { %> style="width:<%= textwidth %>;" <% } %>>
        <% if (locals.pretext) { %>
            <div class="question_postext"><%= pretext %></div>
        <% } %>
        <div class="question_text"><%= text %></div>
        <% if (locals.postext) { %>
            <div class="question_postext"><%= postext %></div>
        <% } %>
    </div>
    <div class="question_answers_side">
        <div class="radio_group">
        <% for(var i = 1; i < variables_count+1; i++) { %>
            <div class="radio_answergroup varanswer" data-var="<%=variables_prefix + i%>" data-vtype="<%= type %>" <%if (locals.elementwidth) { %> style="width:<%= elementwidth %>;" <% } %> >
            <% for(const key in values) { %> 
                    <input type="radio" id="<%= variables_prefix + i %>-<%=key%>" name="<%= variables_prefix + i %>" value="<%= key %>">
                    <% if (locals.showlabels) { %>
                        <label for ="<%= variables_prefix + i %>-<%=key%>"><%=values[key]%></label>
                    <% } %>
            <% } %>
            </div>
         <% } %>
         </div>
     </div>
`;

var MULTIQUESTION_checkbox = `<div class="multiquestioncontainer">
    <% if (locals.showvar) { %>
        <div class="questionvar">
            <% if (locals.multivariable) { %>
                <%= variables_prefix %>            
            <% } else { %>
                <%= variable %>
            <% } %>                
        </div>     
    <% } %>

    <div class="questiontexts">
        <% if (locals.pretext) { %>
            <div class="question_postext"><%= pretext %></div>
        <% } %>
        <div class="question_text"><%= text %></div>
        <% if (locals.postext) { %>
            <div class="question_postext"><%= postext %></div>
        <% } %>
        <% for(const key in values) { %> 
                <%=key%><%=values[key]%>
        <% } %>
    </div>
    <div class="question_answers">
    <div class="checkbox_group">
     <% for(var i = 0; i < variables.length; i++) { %>
        <div class="checkbox_answergroup" <%if (locals.elementwidth) { %> style="width:<%= elementwidth %>;" <% } %> >
                <input type="checkbox" class="varanswer" data-var="<%=variables[i]%>" id="<%=variables[i]%>" name="<%=variables[i]%>">
                <% if (locals.showlabels) { %>
                <label for ="<%=variables[i]%>"><%=variables[i]%></label>
                 <% } %>
        </div>
     <% } %>
     </div>
     </div>
`;

var MULTIQUESTION_SIDE_checkbox = `<div class="multiquestioncontainer_side">
    <% if (locals.showvar) { %>
        <div class="questionvar">
            <% if (locals.multivariable) { %>
                <%= variables_prefix %>            
            <% } else { %>
                <%= variable %>
            <% } %>                
        </div>     
    <% } %>

    <div class="questiontexts_side" <%if (locals.textwidth) { %> style="width:<%= textwidth %>;" <% } %>>
    <div class="questiontexts">
        <% if (locals.pretext) { %>
            <div class="question_pretext"><%= pretext %></div>
        <% } %>
        <div class="question_text"><%= text %></div>
        <% if (locals.postext) { %>
            <div class="question_postext"><%= postext %></div>
        <% } %>
    </div>
    </div>
    <div class="question_answers_side">
    <div class="checkbox_group"  >
        <% for(var i = 1; i < variables_count+1; i++) { %>
        <div class="checkbox_answergroup" <%if (locals.elementwidth) { %> style="width:<%= elementwidth %>;" <% } %> >
                <input type="checkbox" class="varanswer" data-var="<%=variables_prefix + i%>" id="<%=variables_prefix + i%>" name="<%=variables_prefix + i%>">
                <% if (locals.showlabels) { %>
                    <label for ="<%=variables_prefix + i%>"><%=variables_prefix + i%></label>
                 <% } %>
        </div>
     <% } %>
     </div>
     </div>
`;


var MULTIQUESTION_select = `<div class="multiquestioncontainer">
    <% if (locals.showvar) { %>
        <div class="questionvar">
            <% if (locals.multivariable) { %>
                <%= variables_prefix %>            
            <% } else { %>
                <%= variable %>
            <% } %>                
        </div>     
    <% } %>

    <div class="questiontexts">
        <% if (locals.pretext) { %>
            <div class="question_postext"><%= pretext %></div>
        <% } %>
        <div class="question_text"><%= text %></div>
        <% if (locals.postext) { %>
            <div class="question_postext"><%= postext %></div>
        <% } %>
        <% for(const key in values) { %> 
                <%=key%><%=values[key]%>
        <% } %>
    </div>
    <div class="question_answers">
     <% for(var i = 0; i < variables.length; i++) { %>
        <select class="select varanswer" id="<%=variables[i]%>-<%=key%>" data-var="<%=variables[i]%>" data-vtype="<%= type %>" <%if (locals.elementwidth) { %> style="width:<%= elementwidth %>;" <% } %> >
        <% for(const key in values) { %> 
            <option  value="<%= key %>"><%=values[key]%></option>
        <% } %>
        </div>
     <% } %>
     </div>
`;

var MULTIQUESTION_SIDE_select = `<div class="multiquestioncontainer_side">
    <% if (locals.showvar) { %>
        <div class="questionvar">
            <% if (locals.multivariable) { %>
                <%= variables_prefix %>            
            <% } else { %>
                <%= variable %>
            <% } %>                
        </div>     
    <% } %>
    
    <div class="questiontexts_side" <%if (locals.textwidth) { %> style="width:<%= textwidth %>;" <% } %>>
        <% if (locals.pretext) { %>
            <div class="question_postext"><%= pretext %></div>
        <% } %>
        <div class="question_text"><%= text %></div>
        <% if (locals.postext) { %>
            <div class="question_postext"><%= postext %></div>
        <% } %>
    </div>
    <div class="question_answers_side">
         <% for(var i = 1; i < variables_count+1; i++) { %>
            <% if (locals.showlabels) { %>
                <label for ="<%=variables_prefix + i%>"><%=variables_prefix + i%></label>
            <% } %>
            <select id="<%=variables_prefix + i%>" class="selectanswer varanswer" data-var="<%=variables_prefix + i%>" data-vtype="<%= type %>" <%if (locals.elementwidth) { %> style="width:<%= elementwidth %>;" <% } %> >
            <% for(const key in values) { %> 
                    <option  value="<%= key %>"><%=values[key]%></option>
            <% } %>
            </select>
         <% } %>
         </div>
     </div>
`;

var QUESTION_SIDE_select = `<div class="multiquestioncontainer_side">
    <% if (locals.showvar) { %>
        <div class="questionvar">
            <% if (locals.multivariable) { %>
                <%= variables_prefix %>            
            <% } else { %>
                <%= variable %>
            <% } %>                
        </div>     
    <% } %>

    <div class="questiontexts_side" <%if (locals.textwidth) { %> style="width:<%= textwidth %>;" <% } %>>
        <% if (locals.pretext) { %>
            <div class="question_postext"><%= pretext %></div>
        <% } %>
        <div class="question_text"><%= text %></div>
        <% if (locals.postext) { %>
            <div class="question_postext"><%= postext %></div>
        <% } %>
    </div>
    <div class="question_answers_side">
         <% for(var i = 1; i < variables_count+1; i++) { %>
            <% if (locals.showlabels) { %>
                <label for ="<%=variables_prefix + i%>"><%=variables_prefix + i%></label>
            <% } %>
             <select id="<%=variable%>" class="selectanswer varanswer" data-var="<%=variable%>" data-vtype="<%= type %>" <%if (locals.elementwidth) { %> style="width:<%= elementwidth %>;" <% } %> >
            <% for(const key in values) { %> 
                    <option  value="<%= key %>"><%=values[key]%></option>
            <% } %>
            </select>
         <% } %>
         </div>
     </div>
`;

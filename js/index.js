//<pre><code class="php"></code></pre>
<pre>
<code class="php">
&lt;?php // adduser.php
// The PHP code

    $forename = $surname = $username = $password = $age = $email = "";

    if (isset($_POST['forename']))
    $forename = fix_string($_POST['forename']);
    if (isset($_POST['surname']))
    $surname = fix_string($_POST['surname']);
    if (isset($_POST['username']))
    $username = fix_string($_POST['username']);
    if (isset($_POST['password']))
    $password = fix_string($_POST['password']);
    if (isset($_POST['age']))
    $age = fix_string($_POST['age']);
    if (isset($_POST['email']))
    $email = fix_string($_POST['email']);

    $fail = validate_forename($forename);
    $fail .= validate_surname($surname);
    $fail .= validate_username($username);
    $fail .= validate_password($password);
    $fail .= validate_age($age);
    $fail .= validate_email($email);
    
    echo "&lt;!DOCTYPE html&gt;\n&lt;html&gt;&lt;head&gt;&lt;title&gt;An Example Form&lt;/title&gt;";

    if ($fail == "")
    {
        echo "&lt;/head&gt;&lt;body&gt;Form data successfully validated:
        $forename, $surname, $username, $password, $age, $email.&lt;/body&gt;&lt;/html&gt;";
        // This is where you would enter the posted fields into a database,
        // preferably using hash encryption for the password.
        exit;
    }

    echo &lt;&lt;&lt;_END
        
    &lt;!-- The HTML/JavaScript section --&gt;
        
    &lt;style&gt;
        .signup {
            border: 1px solid #999999;
            font: normal 14px helvetica; color:#444444;
        }
    &lt;/style&gt;
    
    &lt;script&gt;
    function validate(form)
    {
        fail = validateForename(form.forename.value)
        fail += validateSurname(form.surname.value)
        fail += validateUsername(form.username.value)
        fail += validatePassword(form.password.value)
        fail += validateAge(form.age.value)
        fail += validateEmail(form.email.value)
        
        if (fail == "") return true
        else { alert(fail); return false }
    }
    
    function validateForename(field)
    {
        return (field == "") ? "No Forename was entered.\n" : ""
    }
    
    function validateSurname(field)
    {
        return (field == "") ? "No Surname was entered.\n" : ""
    }
    
    function validateUsername(field)
    {
        if (field == "") return "No Username was entered.\n"
        else if (field.length &lt; 5)
            return "Usernames must be at least 5 characters.\n"
        else if (/[^a-zA-Z0-9_-]/.test(field))
            return "Only a-z, A-Z, 0-9, - and _ allowed in Usernames.\n"
        
        return ""
    }
    
    function validatePassword(field)
    {
        if (field == "") return "No Password was entered.\n"
        else if (field.length &lt; 6)
            return "Passwords must be at least 6 characters.\n"
        else if (!/[a-z]/.test(field) || ! /[A-Z]/.test(field) ||
                 !/[0-9]/.test(field))
            return "Passwords require one each of a-z, A-Z and 0-9.\n"
        
        return ""
    }
    
    function validateAge(field)
    {
        if (isNaN(field)) return "No Age was entered.\n"
        else if (field &lt; 18 || field &gt; 110)
            return "Age must be between 18 and 110.\n"
        
        return ""
    }
    
    function validateEmail(field)
    {
        if (field == "") return "No Email was entered.\n"
        else if (!((field.indexOf(".") &gt; 0) &amp;&amp;
                  (field.indexOf("@") &gt; 0)) || /[^a-zA-Z0-9.@_-]/.test(field))
            return "The Email address is invalid.\n"
        
        return ""
    }
    &lt;/script&gt;
    &lt;/head&gt;
    &lt;body&gt;
        &lt;table border="0" cellpadding="2" cellspacing="5" bgcolor="#eeeeee"&gt;&nbsp;
            &lt;th colspan="2" align="center"&gt;Signup Form&lt;/th&gt;&nbsp;
            &lt;tr&gt;&lt;td colspan="2"&gt;Sorry, the following errors were found&lt;br&gt;&nbsp;
        in your form: &lt;p&gt;&lt;font color=red size=1&gt;&lt;i&gt;$fail&lt;/i&gt;&lt;/font&gt;&lt;/p&gt;&nbsp;
        &lt;/td&gt;&lt;/tr&gt;&nbsp;
            &lt;form method="post" action="adduser.php" onSubmit="return validate(this)"&gt;&nbsp;
            &lt;tr&gt;&lt;td&gt;Forename&lt;/td&gt;&nbsp;
            &lt;td&gt;&lt;input type="text" maxlength="32" name="forename" value="$forename"&gt;
            &lt;/td&gt;&lt;/tr&gt;&lt;tr&gt;&lt;td&gt;Surname&lt;/td&gt;
            &lt;td&gt;&lt;input type="text" maxlength="32" name="surname" value="$surname"&gt;
            &lt;/td&gt;&lt;/tr&gt;&lt;tr&gt;&lt;td&gt;Username&lt;/td&gt;
            &lt;td&gt;&lt;input type="text" maxlength="16" name="username" value="$username"&gt;
            &lt;/td&gt;&lt;/tr&gt;&lt;tr&gt;&lt;td&gt;Password&lt;/td&gt;
            &lt;td&gt;&lt;input type="text" maxlength="12" name="password" value="$password"&gt;
            &lt;/td&gt;&lt;/tr&gt;&lt;tr&gt;&lt;td&gt;Age&lt;/td&gt;
            &lt;td&gt;&lt;input type="text" maxlength="3" name="age" value="$age"&gt;
            &lt;/td&gt;&lt;/tr&gt;&lt;tr&gt;&lt;td&gt;Email&lt;/td&gt;
            &lt;td&gt;&lt;input type="text" maxlength="64" name="email" value="$email"&gt;
            &lt;/td&gt;&lt;/tr&gt;&lt;tr&gt;&lt;td colspan="2" align="center"&gt;&lt;input type="submit"
            value="Signup"&gt;&lt;/td&gt;&lt;/tr&gt;
            &lt;/form&gt;
        &lt;/table&gt;
    &lt;/body&gt;
    &lt;/html&gt;
    _END;
    
    // The PHP functions
    function validate_forename($field)
    {
        return ($field == "") ? "No Forename was entered&lt;br&gt;": "";
    }
    
    function validate_surname($field)
    {
        return($field == "") ? "No Surname was entered&lt;br&gt;" : "";
    }
    
    function validate_username($field)
    {
        if ($field == "") return "No Username was entered&lt;br&gt;";
        else if (strlen($field) &lt; 5)
            return "Usernames must be at least 5 characters&lt;br&gt;";
        else if (preg_match("/[^a-zA-Z0-9_-]/", $field))
            return "Only letters, numbers, - and _ in usernames&lt;br&gt;";
        
        return "";
    }
    
    function validate_password($field)
    {
        if ($field == "") return "No Password was entered&lt;br&gt;";
        else if (strlen($field) &lt; 6)
            return "Passwords must be at least 6 characters&lt;br&gt;";
        else if (!preg_match("/[a-z]/", $field) ||
                 !preg_match("/[A-Z]/", $field) ||
                 !preg_match("/[0-9]/", $field))
            return "Passwords require 1 each of a-z, A-Z and 0-9&lt;br&gt;";
        
        return "";
    }
    
    function validate_age($field)
    {
        if ($field == "") return "No Age was entered&lt;br&gt;";
        else if ($field &lt; 18 || $field &gt; 110)
            return "Age must be between 18 and 110&lt;br&gt;";
        
        return "";
    }
    
    function validate_email($field)
    {
        if ($field == "") return "No Email was entered&lt;br&gt;";
        else if (!((strpos($field, ".") &gt; 0) &amp;&amp;
                  (strpos($field, "@") &gt; 0)) || preg_match("/[^a-zA-Z0-9.@_-]/", $field))
            return "The Email address is invalid&lt;br&gt;";
        
        return "";
    }
    
    function fix_string($string)
    {
        if (get_magic_quotes_gpc()) $string = stripslashes($string);
        return htmlentities ($string);
    }
?&gt;
</code>
</pre>
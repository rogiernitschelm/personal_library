module Listable
  def format_description(description)
    "#{description}".ljust(30)
  end

  def format_date(start_date, end_date=start_date)
    dates = start_date.strftime("%D") if start_date
    dates << " -- " + end_date.strftime("%D") if end_date
    dates = "N/A" if !dates
    return dates
  end

  # if no site name is given, the site name will be equal to the site's adress

  def format_name(site_name)
    site_name ? site_name : description
  end

  # I don't see to-do-symbols? Therefore I just colored the symbols given.

  def format_priority(priority)
    value = " ⇧".colorize(:red) if priority == "high"
    value = " ⇨".colorize(:yellow) if priority == "medium"
    value = " ⇩".colorize(:green) if priority == "low"
    value = "" if !priority    
    return value
  end

  # change priority to the new priority

  def change_priority(priority)
    @priority = priority
  end

  # shows current priority

  def status_priority
    puts @priority
    if @priority == nil
      puts "no priority given"
    end
  end
end
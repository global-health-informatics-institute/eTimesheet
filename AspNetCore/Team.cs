using System;

namespace AspNetCore
{
  public class Team
  {
  public int Id { get; set; } 
  public string? Member { get; set; }
  public DateOnly Start { get; set; }
  public DateOnly End { get; set; }
  }
}
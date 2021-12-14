using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata;
using OkEntrega.webApi.Domains;

#nullable disable

namespace OkEntrega.webApi.Contexts
{
    public partial class OkEntregasContext : DbContext
    {
        public OkEntregasContext()
        {
        }

        public OkEntregasContext(DbContextOptions<OkEntregasContext> options)
            : base(options)
        {
        }

        public virtual DbSet<Contato> Contatos { get; set; }
        public virtual DbSet<Empresa> Empresas { get; set; }
        public virtual DbSet<Lead> Leads { get; set; }
        public virtual DbSet<Reuniao> Reuniaos { get; set; }
        public virtual DbSet<TipoUsuario> TipoUsuarios { get; set; }
        public virtual DbSet<Usuario> Usuarios { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            if (!optionsBuilder.IsConfigured)
            {
                // #warning To protect potentially sensitive information in your connection string, you should move it out of source code. You can avoid scaffolding the connection string by using the Name= syntax to read it from configuration - see https://go.microsoft.com/fwlink/?linkid=2131148. For more guidance on storing connection strings, see http://go.microsoft.com/fwlink/?LinkId=723263.
                // optionsBuilder.UseSqlServer("Data Source=CYBERNOTE-14\\SQLEXPRESS;initial catalog= OKEntregas;user Id=sa; pwd=Senai@132");
                //optionsBuilder.UseSqlServer("Data Source=DESKTOP-42FT3LN\\SQLEXPRESS;initial catalog=OKEntregas;user Id=joao; pwd=1234j");
                //optionsBuilder.UseSqlServer("Data Source=DESKTOP-M7IPJ7L\\SQLEXPRESS;initial catalog= OKEntregas;user Id=sa; pwd=Senai@132");
                optionsBuilder.UseSqlServer("Data Source=DESKTOP-NQMUPH6\\SQLEXPRESS;initial catalog= OKEntregas;user Id=sa; pwd=senai@132");
                //optionsBuilder.UseSqlServer("Data Source=database.cmudjo7ttpbr.us-east-1.rds.amazonaws.com; initial catalog= OKEntregas;user Id=giovanna; pwd=Senai132");
            }
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.HasAnnotation("Relational:Collation", "Latin1_General_CI_AS");

            modelBuilder.Entity<Contato>(entity =>
            {
                entity.HasKey(e => e.IdContato)
                    .HasName("PK__Contato__2AC4F064C5E12898");

                entity.ToTable("Contato");

                entity.Property(e => e.DataCriacao).HasColumnType("datetime");

                entity.Property(e => e.Descricao)   
                    .IsRequired()
                    .HasMaxLength(255)
                    .IsUnicode(false);

                entity.Property(e => e.Titulo)
                    .IsRequired()
                    .HasMaxLength(190)
                    .IsUnicode(false);

                entity.HasOne(d => d.IdEmpresaNavigation)
                    .WithMany(p => p.Contatos)
                    .HasForeignKey(d => d.IdEmpresa)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK__Contato__IdEmpre__49C3F6B7");

                entity.HasOne(d => d.IdLeadsNavigation)
                    .WithMany(p => p.Contatos)
                    .HasForeignKey(d => d.IdLeads)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK__Contato__IdLeads__4AB81AF0");
            });

            modelBuilder.Entity<Empresa>(entity =>
            {
                entity.HasKey(e => e.IdEmpresa)
                    .HasName("PK__Empresa__5EF4033E1EFF343C");

                entity.ToTable("Empresa");

                entity.Property(e => e.Cnpj)
                    .IsRequired()
                    .HasMaxLength(14)
                    .IsUnicode(false);

                entity.Property(e => e.EmailEmpresa)
                    .IsRequired()
                    .HasMaxLength(255)
                    .IsUnicode(false);

                entity.Property(e => e.NomeEmpresa)
                    .IsRequired()
                    .HasMaxLength(255)
                    .IsUnicode(false);

                entity.Property(e => e.NomeFantasia)
                    .HasMaxLength(255)
                    .IsUnicode(false);

                entity.Property(e => e.NumeroDeTelefone)
                    .HasMaxLength(13)
                    .IsUnicode(false);

                entity.Property(e => e.SegmentoDeMercado)
                    .IsRequired()
                    .HasMaxLength(255)
                    .IsUnicode(false);
            });

            modelBuilder.Entity<Lead>(entity =>
            {
                entity.HasKey(e => e.IdLeads)
                    .HasName("PK__Leads__BD659194DC179D61");

                entity.Property(e => e.Cargo)
                    .IsRequired()
                    .HasMaxLength(255)
                    .IsUnicode(false);

                entity.Property(e => e.Email)
                    .IsRequired()
                    .HasMaxLength(255)
                    .IsUnicode(false);

                entity.Property(e => e.Necessidades)
                    .IsRequired()
                    .HasMaxLength(255)
                    .IsUnicode(false);

                entity.Property(e => e.Nome)
                    .IsRequired()
                    .HasMaxLength(255)
                    .IsUnicode(false);

                entity.Property(e => e.Score)
                    .IsRequired()
                    .HasMaxLength(100)
                    .IsUnicode(false);

                entity.Property(e => e.StatusLead)
                    .IsRequired()
                    .HasMaxLength(255)
                    .IsUnicode(false)
                    .HasColumnName("statusLead");

                entity.Property(e => e.Telefone)
                    .IsRequired()
                    .HasMaxLength(13)
                    .IsUnicode(false);

                entity.HasOne(d => d.IdEmpresaNavigation)
                    .WithMany(p => p.Leads)
                    .HasForeignKey(d => d.IdEmpresa)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK__Leads__IdEmpresa__3F466844");
            });

            modelBuilder.Entity<Reuniao>(entity =>
            {
                entity.HasKey(e => e.IdReuniao)
                    .HasName("PK__Reuniao__BA758BE3D8817E7F");

                entity.ToTable("Reuniao");

                entity.Property(e => e.Ata)
                    .HasMaxLength(255)
                    .IsUnicode(false)
                    .HasColumnName("ATA");

                entity.Property(e => e.DataInicio).HasColumnType("datetime");

                entity.Property(e => e.DataTermino).HasColumnType("datetime");

                entity.HasOne(d => d.IdLeadsNavigation)
                    .WithMany(p => p.Reuniaos)
                    .HasForeignKey(d => d.IdLeads)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK__Reuniao__IdLeads__4316F928");

                entity.HasOne(d => d.IdUsuarioNavigation)
                    .WithMany(p => p.Reuniaos)
                    .HasForeignKey(d => d.IdUsuario)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK__Reuniao__IdUsuar__4222D4EF");
            });

            modelBuilder.Entity<TipoUsuario>(entity =>
            {
                entity.HasKey(e => e.IdTipoUsuario)
                    .HasName("PK__TipoUsua__CA04062B217CA549");

                entity.ToTable("TipoUsuario");

                entity.HasIndex(e => e.TipoUsuario1, "UQ__TipoUsua__52F7E3AA9EBC626C")
                    .IsUnique();

                entity.Property(e => e.TipoUsuario1)
                    .IsRequired()
                    .HasMaxLength(50)
                    .IsUnicode(false)
                    .HasColumnName("TipoUsuario");
            });

            modelBuilder.Entity<Usuario>(entity =>
            {
                entity.HasKey(e => e.IdUsuario)
                    .HasName("PK__Usuarios__5B65BF97D8243A20");

                entity.HasIndex(e => e.Email, "UQ__Usuarios__A9D105345A3D53B5")
                    .IsUnique();

                entity.Property(e => e.Email)
                    .IsRequired()
                    .HasMaxLength(200)
                    .IsUnicode(false);

                entity.Property(e => e.Nome)
                    .IsRequired()
                    .HasMaxLength(200)
                    .IsUnicode(false);

                entity.Property(e => e.Senha)
                    .IsRequired()
                    .HasMaxLength(200)
                    .IsUnicode(false);

                entity.Property(e => e.Sobrenome)
                    .IsRequired()
                    .HasMaxLength(200)
                    .IsUnicode(false);

                entity.HasOne(d => d.IdTipoUsuarioNavigation)
                    .WithMany(p => p.Usuarios)
                    .HasForeignKey(d => d.IdTipoUsuario)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK__Usuarios__IdTipo__3A81B327");
            });

            OnModelCreatingPartial(modelBuilder);
        }

        partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
    }
}
